import { Avatar, Button, Input } from "@nextui-org/react";
import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import DashboardWrapper from "../../components/dashboard-wrapper/DashboardWrapper";
import "./useredit.scss";
import avt from "../../images/avt_default.png";

import { updateCustomer, updateUser } from "../../reduxToolkit/apiRequest";
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

const UserEditDetail = ({ user }) => {
  const [sex,setSex] = useState("")
  console.log(user)
  const handleChange = (e) => {
    setSex(e.target.value)
    setData((state) => {
      return {
        ...state,
        sex: e.target.value,
      };
    });
  };

  const navigate = useNavigate();
 
  
  const [data, setData] = useState({
    customer_id: user?.customer_id,
    register_date : user?.register_date,
    f_name : user?.f_name,
    l_name : user?.l_name,
    sex : user?.sex,
    bdate : user?.bdate,
    _address : user?._address,
  });
  const sendData = async () => {
   updateCustomer(data,navigate)

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
              <p className="name">{user?.f_name +" "  + user.l_name || "HO VA TEN"}</p>
              <span className="email">{user?.customer_id || "ID"}</span>
            </div>
          </div>
          <div className="userShowLabel">Account Detail</div>
          <div className="userShowIcon">
            <BsCalendarDate />
            <span>Ng??y ????ng k??: {user?.register_date.slice(0,10) || "NGAY DANG KI"}</span>
          </div>
          <div className="userShowIcon">
            <BsFillPersonFill />
            <span>Gi???i t??nh: {user?.sex || "GIOI TINH"}</span>
          </div>
          <div className="userShowIcon">
            <FaBirthdayCake />
            <span>Ng??y sinh: {user.bdate.slice(0,10) || "NGAY SINH"}</span>
          </div>
          <div className="userShowIcon">
            <BsCoin />
            <span>??i???m t??ch l??y: {user.accumulate_point || "DIEM TICH LUY"}</span>
          </div>
          <div className="userShowIcon">
            <CgMoveUp />
            <span>C???p ?????: {user._level || "CAP DO"}</span>
          </div>
          <div className="userShowIcon">
            <FaAddressBook />
            <span>?????a ch???: {user._address || "DIA CHI"}</span>
          </div>
        </div>
        <div className="userUpdate">
          <div className="userUpdateTitle">Edit</div>
          <form action="submit" className="userUpdateForm">
            <div className="textUpdate">
              <Input
                size="md"
                underlined
                labelPlaceholder="H???"
                color="success"
                onChange={(e) => {
                  setData((state) => {
                    return {
                      ...state,
                      f_name: e.target.value,
                    };
                  });
                }}
              />
              <Input
                size="md"
                underlined
                labelPlaceholder="T??n"
                color="success"
                onChange={(e) => {
                  setData((state) => {
                    return {
                      ...state,
                      l_name: e.target.value,
                    };
                  });
                }}
              />
              <Select
                value={sex}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>Gi???i T??nh</em>
                </MenuItem>
                <MenuItem value={'M'}>Male</MenuItem>
                <MenuItem value={'F'}>Female</MenuItem>
                
              </Select>
              <Input
                size="md"
                underlined
                label="Ng??y Sinh"
                type='date'
                color="success"
                onChange={(e) => {
                  setData((state) => {
                    return {
                      ...state,
                      bdate: e.target.value,
                    };
                  });
                }}
              />
              <Input
                size="md"
                underlined
                label="Ng??y ????ng k??"
                type='date'
                color="success"
                onChange={(e) => {
                  setData((state) => {
                    return {
                      ...state,
                      register_date: e.target.value,
                    };
                  });
                }}
              />
              <Input
                size="md"
                underlined
                labelPlaceholder="?????a ch???"
                color="success"
                onChange={(e) => {
                  setData((state) => {
                    return {
                      ...state,
                      _address: e.target.value,
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
