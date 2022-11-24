import { Avatar, Button, Input } from "@nextui-org/react";
import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import DashboardWrapper from "../../components/dashboard-wrapper/DashboardWrapper";
import "./useredit.scss";
import avt from "../../images/avt_default.png";

import { updateUser } from "../../reduxToolkit/apiRequest";
import { useDispatch } from "react-redux";
import { BsCalendarDate, BsFillPersonFill, BsCoin } from "react-icons/bs";
import { FaBirthdayCake, FaAddressBook } from "react-icons/fa";
import { CgMoveUp } from "react-icons/cg";

import MenuItem from "@mui/material/MenuItem";

import Select from "@mui/material/Select";
const UserEdit = (props) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <UserEditDetail user={props.user} renderRow={props.renderRow} />
        }
      />
    </Routes>
  );
};

const UserEditDetail = ({ user, renderRow }) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    console.log(event.target.value)
    setAge(event.target.value);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [data, setData] = useState({
    name: user?.username,
    email: user?.email,
    phone: user?.phone,
    address: user?.address,
    fullname: user?.fullname,
    image: user?.image,
    action: "getUserUpdate",
    email_origin: user?.email,
  });
  const sendData = async () => {
    if (!file) {
     // const newData = { ...data, image: user.image };
      updateUser(newData, dispatch);
      navigate("/admin/customers");
    } else {
      //const newData = { ...data, image: base64 };
      updateUser(newData, dispatch);
      navigate("/admin/customers");
    }
    renderRow();
  };
  return (
    <DashboardWrapper>
      {/* <DashboardWrapperRight> */}
      <div className="userEdit__header">
        <div className="title mb">Edit User</div>
        <Button size="lg" shadow auto onClick={sendData}>
          Save
        </Button>
      </div>
      <div className="userEdit__container">
        <div className="userShow">
          <div className="userShowTitle">
            <Avatar
              src={user?.image == "" ? avt : user?.image}
              zoomed
              bordered
              size="xl"
              color="success"
            />
            <div className="userShowTopTitle">
              <p className="name">{user?.username || "HO VA TEN"}</p>
              <span className="email">{user?.email || "ID"}</span>
            </div>
          </div>
          <div className="userShowLabel">Account Detail</div>
          <div className="userShowIcon">
            <BsCalendarDate />
            <span>{user?.fullname || "NGAY DANG KI"}</span>
          </div>
          <div className="userShowIcon">
            <BsFillPersonFill />
            <span>{user?.phone || "GIOI TINH"}</span>
          </div>
          <div className="userShowIcon">
            <FaBirthdayCake />
            <span>{false || "NGAY SINH"}</span>
          </div>
          <div className="userShowIcon">
            <BsCoin />
            <span>{false || "DIEM TICH LUY"}</span>
          </div>
          <div className="userShowIcon">
            <CgMoveUp />
            <span>{false || "CAP DO"}</span>
          </div>
          <div className="userShowIcon">
            <FaAddressBook />
            <span>{false || "DIA CHI"}</span>
          </div>
        </div>
        <div className="userUpdate">
          <div className="userUpdateTitle">Edit</div>
          <form action="submit" className="userUpdateForm">
            <div className="textUpdate">
              <Input
                size="md"
                underlined
                labelPlaceholder="Họ"
                color="success"
                onChange={(e) => {
                  setData((state) => {
                    return {
                      ...state,
                      fullname: e.target.value,
                    };
                  });
                }}
              />
              <Input
                size="md"
                underlined
                labelPlaceholder="Tên"
                color="success"
                onChange={(e) => {
                  setData((state) => {
                    return {
                      ...state,
                      phone: e.target.value,
                    };
                  });
                }}
              />
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>Giới Tính</em>
                </MenuItem>
                <MenuItem value={'M'}>Male</MenuItem>
                <MenuItem value={'F'}>Female</MenuItem>
                
              </Select>
              <Input
                size="md"
                underlined
               
                type='date'
                color="success"
                onChange={(e) => {
                  setData((state) => {
                    return {
                      ...state,
                      address: e.target.value,
                    };
                  });
                }}
              />
              <Input
                size="md"
                underlined
                labelPlaceholder="Địa chỉ"
                color="success"
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
  
          </form>
        </div>
      </div>
      {/* </DashboardWrapperRight> */}
    </DashboardWrapper>
  );
};

export default UserEdit;
