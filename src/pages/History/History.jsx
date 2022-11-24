import React, { useState } from "react";
import "./style.scss";
import avt from "../../images/avt_default.png";
import { AiOutlineLogout } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";
import Itemcard from "./ItemCard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { logoutUser } from "../../reduxToolkit/apiRequest";
const History = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state?.auth?.login?.currentUser);
  const api = useSelector((state) => state?.auth.API);
  const navigate = useNavigate();
  if (user?.username) {
    console.log(user?.username)
  } else {
    navigate("/");
  }
  const [items, setItems] = useState();
  const getData = async () => {
    const x = await axios
      .post("http://localhost:8080/WEB/VietFast/BE/index.php", {
        action: "getItem",
        email: user?.email,
      })
      .then((res) => {
        return res.data;
      });
    return x;
  };
  const promise = getData();
  promise.then((res) => {
    setItems(res[0].item);
  });
  const List = items?.split(",");
  List?.splice(-1,1);

  return (
    <div className="History">
      <div className="History-left">
        <div className="History-left-header">
          <div className="top">
            <div className="image">
              <img alt="" src={user?.image ? user.image : avt} />
            </div>
            <div className="name">
              <p>{user?.username}</p>
            </div>
          </div>
          <div className="bot">
            <div className="navigate" onClick={()=>{navigate('/info')}}>
              <HiOutlineUser />
              <p>Thông tin cá nhân</p>
            </div>
            <div className="navigate"  onClick={()=>{logoutUser(dispatch,navigate)}}>
              <AiOutlineLogout />
              <p>Đăng Xuất</p>
            </div>
          </div>
        </div>
      </div>
      <div className="History-right">
      {List?.map((item, index) => {
        const y = api.ALL.filter((x) => x.params == item)
       
        return <Itemcard props={y}/>
      })}</div>
    </div>
  );
};

export default History;
