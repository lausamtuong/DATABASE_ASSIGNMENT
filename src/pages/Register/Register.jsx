import React, { useEffect, useState } from "react";
import "./style.css";
import TextField from "@mui/material/TextField";
import { AiOutlineEye, AiOutlineCheck, AiOutlineCloseCircle } from "react-icons/ai";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { registerUser } from "../../reduxToolkit/apiRequest";
import { useDispatch } from "react-redux";
const target = document.querySelector(".overlayz");
const Register = () => {
  const dispatch = useDispatch()
  useEffect(() => window.scrollTo(0, 0), []);
  const [type, setType] = useState("password");
  const [isCleck, setCleck] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const re_1digit = new RegExp("^(?=.*[0-9])");
  const re_8chart = new RegExp("^(?=.{8,})");
  const re_low = new RegExp("^(?=.*[a-z])");
  const re_up = new RegExp("^(?=.*[A-Z])");
  const re_spe = new RegExp("^(?=.*[!@#$%^&*])");
  const formik = useFormik({
    initialValues: {
      password: "",
      confirm: "",
      username: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().matches(/^(?=.*[0-9])/, "color"),
      confirm: Yup.string()
        .oneOf([Yup.ref("password"), null], "Nhập lại mật khẩu không chính xác")
        .required("Yêu cầu nhập lại mật khẩu"),
      username: Yup.string()
        .required("Vui lòng nhập username")
        .min(8, "Vui lòng nhập username chính xác")
    }),
    onSubmit: (values) => {
      const newUser = {
        id_user:isCleck?'':uuidv4().toString().replaceAll("-",''),
        name: values.name,
        password: values.password,
        username: values.username,
        type: isCleck?"cleck":"user",
        id_cleck:"",
      };
     
      registerUser(newUser,dispatch,navigate)
    },
  });
  useEffect(() => {
    if (
      formik.values.username &&
      formik.values.password &&
      formik.values.confirm 
   
    )
      setDisabled(false);
    else setDisabled(true);
  }, [formik.values.username, formik.values.name, formik.values.password]);
  const icon = document.querySelector(".input__icon");
  return (
    <div className="register__form">
      <form className="form__register" onSubmit={formik.handleSubmit}>
        <div className="title">Đăng ký tài khoản</div>
        <TextField
          name="username"
          id="username"
          label="Tên tài khoản"
          variant="outlined"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.username && formik.errors.username ? (
          <div className="error_msg">{formik.errors.username}</div>
        ) : null}
        <TextField
          id="password"
          name="password"
          label="Mật khẩu"
          type={type}
          variant="outlined"
          value={formik.values.password}
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
          label="Nhập lại mật khẩu"
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
          <div className="camket">
          <input type="checkbox" onClick={()=>setCleck(!isCleck)}/>
          <p>
            Bạn là nhân viên của cửa hàng, Hãy click vào đây!
          </p>
        </div>
        <div className="footer__form">Mật khẩu bạn phải có: </div>
        <ul className="check__pw">
          <li className="">
            {re_1digit.test(formik.values.password) ? (
              <p className="color">
                <AiOutlineCheck /> Ít nhất 1 số
              </p>
            ) : (
              <p className="">
                <AiOutlineCheck />
                Ít nhất 1 số
              </p>
            )}
          </li>
          <li className="">
            {re_8chart.test(formik.values.password) ? (
              <p className="color">
                <AiOutlineCheck />
                Ít nhất 8 ký tự
              </p>
            ) : (
              <p className="">
                <AiOutlineCheck />
                Ít nhất 8 ký tự
              </p>
            )}
          </li>
          <li className="">
            {re_up.test(formik.values.password) ? (
              <p className="color">
                <AiOutlineCheck />
                Chữ cái viết hoa (A-Z)
              </p>
            ) : (
              <p className="">
                <AiOutlineCheck />
                Chữ cái viết hoa (A-Z)
              </p>
            )}
          </li>
          <li className="">
            {re_low.test(formik.values.password) ? (
              <p className="color">
                <AiOutlineCheck />
                Chữ cái viết thường (a-z)
              </p>
            ) : (
              <p className="">
                <AiOutlineCheck />
                Chữ cái viết thường (a-z)
              </p>
            )}
          </li>
          <li className="">
            {re_spe.test(formik.values.password) ? (
              <p className="color">
                <AiOutlineCheck />
                Kí tự đặc biệt
              </p>
            ) : (
              <p className="">
                <AiOutlineCheck />
                Kí tự đặc biệt
              </p>
            )}
          </li>
        </ul>
        <p className="dieuKhoan">
          Bằng việc bấm nút Đăng ký bên dưới, tôi xác nhận đã đọc, hiểu và đồng
          ý với các <a href="#">Điều kiện và Điều khoản </a>của VietFast.
        </p>
        <div className="camket">
          <input type="checkbox" />
          <p>
            Đăng ký nhận thông tin chương trình khuyến mãi, dịch vụ từ VietFast
          </p>
        </div>
        <Button type="submit" variant="contained" disabled={disabled}>
          Đăng Kí
        </Button>
        <p className="noti__trans">Đã có tài khoản?</p>
        <Button variant="outlined" onClick={() => navigate("/login")}>
          Đăng nhập
        </Button>
      </form>
      <div className="overlayz none">
        <div className="box">
          
          <div className="flex">
            <AiOutlineCloseCircle 
              onClick={(e) => {
               // e.target.classList.toggle("none");
                document.querySelector(".overlayz").classList.add("none");
              }}
            />
            <div className="title">Email Đã có người sử dụng</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
