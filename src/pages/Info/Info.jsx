import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import avt from "../../images/avt_default.png";
import avt1 from "../../images/Vinfast-logo.png";
import { AiFillEdit, AiOutlineEye, AiOutlineLogout } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import {
  logoutUser,
  setAvt,
  updateUser,
  updateUserPassword,
} from "../../reduxToolkit/apiRequest";

const Info = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLog = useSelector((state) => state?.auth?.login?.isLogin);
  const user = useSelector((state) => state?.auth?.login?.currentUser);
  const [type, setType] = useState("password");
 // if (!isLog) window.location.replace("http://localhost:3000/login");
  const [disabled, setDisabled] = useState(true);
  const icon = document.querySelector(".input__icon");

  const [data, setData] = useState({
    name: user?.username,
    email: user?.email,
    phone: user?.phone,
    address: user?.address,
    fullname: user?.fullname,
    action: "getUserUpdate",
    email_origin: user?.email,
  });
  const sendData = () => {
   
    updateUser(data, dispatch);
  };
  const formik = useFormik({
    initialValues: {
      old_password: "",
      new_password: "",
      confirm: "",
    },
    validationSchema: Yup.object({
      old_password: Yup.string().matches(/^(?=.*[0-9])/, "color"),
      confirm: Yup.string()
        .oneOf(
          [Yup.ref("new_password"), null],
          "Nhập lại mật khẩu không chính xác"
        )
        .required("Yêu cầu nhập lại mật khẩu"),
    }),
    onSubmit: (values) => {
      const newUpdate = {
        password: values.new_password,
        action: "getUserUpdatePassword",
        email: user?.email,
      };
      if (user?.password == values.old_password)
        updateUserPassword(newUpdate, dispatch, navigate);
      else {
        alert("Mật khẩu cũ sai!");
      }
    },
  });
  useEffect(() => {
    if (
      formik.values.old_password &&
      formik.values.new_password &&
      formik.values.confirm &&
      formik.errors.confirm
    )
      setDisabled(false);
    else setDisabled(true);
  }, [formik.values.new_password, formik.values.confirm]);
  window.scrollTo(0, 0);
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
  const [anhdaidien, setAnhdaidien] = useState(user?.image ? user.image : avt);

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const uploadFile = async (e) => {
    e.preventDefault();
    const base64 = await convertBase64(file);
    const image = {
      action: "setAvt",
      image: base64,
      email: user?.email,
    };
    console.log(base64);
    setAnhdaidien(base64);
    // file.action = "setAvt";
    setAvt(image, dispatch);
  };
  const convertBase64 = (file) => {
    return new Promise((res, rej) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        res(fileReader.result);
      };
      fileReader.onerror = (err) => {
        rej(err);
      };
    });
  };
  return (
    <>
      <div className="Info">
        <div className="Info_title">
          <p>Thông tin cá nhân</p>
          <AiFillEdit
            onClick={() => {
              const edit = document.querySelector(".edit");
              edit.classList.toggle("none");
            }}
          />
        </div>
        <div className="Info_body">
          <div className="Info_body-user">
            
              <div className="Info_body-user-name-box">
                <div className="img">
                  <img src={anhdaidien} alt="avt" />
                </div>
                <div>
                  <p>Xin Chào,</p>
                  <p class="user">{user?.username}</p>
                </div>
              </div>
              <div className="Info_body-user-info-box">
                <div className=''>
                  <span>HỌ VÀ TÊN: </span>
                  <span>{user?.fullname}</span>
                </div>
                <div className=''>
                  <span>Số ĐIỆN THOẠI: </span>
                  <span>{user?.phone}</span>

                </div>
                <div className=''>
                  <span>ĐỊA CHỈ: </span>
                  <span>{user?.address}</span>

                </div>
                <div className=''>
                  <span>ĐIỂM TÍCH LŨY: </span>
                  <span>{user?.address}</span>

                </div>
                <div className=''>
                  <span>CẤP ĐỘ:  </span>
                  <span>{user?.address}</span>

                </div>
                
              </div>

            <div className="Info_body-user-trans-box">
              <div className="item" onClick={() => navigate("/product/payment")}>
                <BsCart2 />
                <p>Giỏ Hàng</p>
              </div>
              <div
                className="item"
                onClick={() => {
                  logoutUser(dispatch, navigate);
                }}
              >
                <AiOutlineLogout />
                <p>Đăng xuất</p>
              </div>
            </div>
          </div>
          <div className="Info_body-des">
            <div>
              <div className="flexx">
                <p>Mã khách hàng</p>
                <p>{user?.username}</p>
              </div>
              <div className="flexx">
                <p>Ngày đăng kí</p>
                <p>{user?.username}</p>
              </div>
              <div className="flexx">
                <p>Email</p>
                <p>{user?.email}</p>
              </div>
              <div className="flexx">
                <p>Mật Khẩu</p>
                <input
                  type="password"
                  value={user?.password}
                  className="field left"
                  readonly
                />
              </div>
            </div>
            <div>
              <button
                onClick={() => {
                  const target = document.querySelector(".overlayz");

                  target.classList.toggle("none");
                }}
              >
                Thay đổi mật Kkẩu
              </button>
              <form method="POST" encType="multipart/form-data">
                <p className="update-avt">Cập nhật ảnh đại diện</p>
                <label for="file-upload" class="custom-file-upload">
                  <input id="file-upload" type="file" onChange={saveFile} />
                </label>

                <button onClick={uploadFile} type="submit">
                  Upload
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="overlayz none">
          <div className="box">
            <div className="box-header">
              <div className="image">
                <img src={avt1} alt="avt" />
              </div>
              <FaTimes
                onClick={(e) => {
                  const target = document.querySelector(".overlayz");

                  target.classList.toggle("none");
                }}
              />
            </div>
            <div className="title">Đổi mật khẩu</div>
            <form className="box-body" onSubmit={formik.handleSubmit}>
              <TextField
                id="old_password"
                name="old_password"
                label="Mật khẩu cũ"
                type={type}
                variant="outlined"
                value={formik.values.old_password}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                InputProps={{
                  endAdornment: (
                    <AiOutlineEye
                      className="input__icon"
                      onClick={() => {
                        icon.classList.toggle("icon__active");
                        if (type == "password") setType("text");
                        else setType("password");
                      }}
                    />
                  ),
                }}
              />
              <TextField
                id="new_password"
                name="new_password"
                label="Mật khẩu mới"
                type={type}
                variant="outlined"
                value={formik.values.new_password}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                InputProps={{
                  endAdornment: (
                    <AiOutlineEye
                      className="input__icon"
                      onClick={() => {
                        icon.classList.toggle("icon__active");
                        if (type == "password") setType("text");
                        else setType("password");
                      }}
                    />
                  ),
                }}
              />
              <TextField
                id="confirm"
                label="Nhập lại mật khẩu mới"
                name="confirm"
                type={type}
                variant="outlined"
                value={formik.values.confirm}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.confirm && formik.errors.confirm ? (
                <div className="error_msg">{formik.errors.confirm}</div>
              ) : null}
              <Button type="submit" variant="contained" disabled={disabled}>
                Xác nhận
              </Button>
            </form>
          </div>
        </div>
        <div className="overlayz none edit">
          <div className="box">
            <div className="edit_title">Cập nhật thông tin cá nhân</div>
            <div className="edit_body">
              <div className="edit_body-item">
                <p>Nickname</p>
                <input
                  type="text"
                  placeholder={user?.username}
                  onChange={(e) => {
                  
                    setData((state) => {
                      return {
                        ...state,
                        name: e.target.value,
                      };
                    });
                  }}
                />
              </div>
              <div className="edit_body-item">
                <p>Email</p>
                <input
                  type="text"
                  placeholder={user?.email}
                  onChange={(e) => {
                    setData((state) => {
                      return {
                        ...state,
                        email: e.target.value,
                      };
                    });
                  }}
                />
              </div>
              <div className="edit_body-item">
                <p>Họ và Tên</p>
                <input
                  type="text"
                  placeholder={user?.fullname}
                  onChange={(e) => {
                    setData((state) => {
                      return {
                        ...state,
                        fullname: e.target.value,
                      };
                    });
                  }}
                />
              </div>
              <div className="edit_body-item">
                <p>Địa chỉ</p>
                <input
                  type="text"
                  placeholder={user?.address}
                  onChange={(e) => {
                    setData((state) => {
                      return {
                        ...state,
                        address: e.target.value,
                      };
                    });
                  }}
                />
              </div>
              <div className="edit_body-item">
                <p>Số điện thoại</p>
                <input
                  type="text"
                  placeholder={user?.phone}
                  onChange={(e) => {
                    setData((state) => {
                      return {
                        ...state,
                        phone: e.target.value,
                      };
                    });
                  }}
                />
              </div>
            </div>
            <div className="edit_button">
              <button
                onClick={() => {
                  const edit = document.querySelector(".edit");
                  edit.classList.toggle("none");
                }}
              >
                Trở về
              </button>
              <button className="update" onClick={sendData}>
                Cập nhật
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
