import React, { useEffect, useState } from "react";
import Moresp from "./MoreSp/MoreSp";

import { useSelector, useDispatch } from "react-redux";
import {
  AiOutlineMenu,
  AiOutlineGlobal,
  AiOutlineHome,
  AiFillCar,
  AiOutlineGift,
  AiOutlineLogout,
} from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import "./style.scss";
import Sidebar from "../SidebarX/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import avt from "../../images/avt_default.png";
import { logoutUser } from "../../reduxToolkit/apiRequest";
const NavItems = [
  {
    display: "Trang chủ",
    icon: <AiOutlineHome />,
    to: "/",
    section: "",
    class_name: "home_page",
  },
  {
    display: "Danh mục",
    icon: <AiFillCar />,
    to: "",
    section: "sanpham",
    class_name: "san_pham",
    more: <Moresp />,
  },
  {
    display: "Chúng Tôi",
    icon: <AiOutlineGift />,
    to: "about",
    section: "contact",
    class_name: "gift_",
  },
  {
    display: "Liên hệ",
    icon: <AiOutlineGift />,
    to: "contact",
    section: "contact",
    class_name: "gift_",
  },
];
const Header = () => {
  const user = useSelector(state=>state.auth.login?.currentUser)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("Tài Khoản");
  const upload = useSelector((state) => state?.auth?.login);
  const more_user = document.querySelector(".more__user");
  const header_user_info = document.querySelector(".header__user-info");
  const [anhdaidien, setAnhdaidien] = useState(user?.image ? user.image : avt);
  if (header_user_info)
    header_user_info.addEventListener("mouseover", () => {
      more_user.classList.add("active-user");
    });
  if (more_user)
    more_user.addEventListener("mouseleave", () => {
      more_user.classList.remove("active-user");
    });
  useEffect(() => {
    setName(user?.username);
    setAnhdaidien(user?.image);
  }, [upload.uploadAvt]);
  return (
    <div className="container">
      <div className="header">
        <div className="header__logo" onClick={() => navigate("/")}>
          <img className="logo-main" alt="Porto" src={"https://www.coolmate.me/images/logo-coolmate.svg"}></img>
        </div>
        <div className="header__right ">
          <ul className="header__list">
            {NavItems.map((item, index) => (
              <Link to={item.to} key={index} className={item.class_name}>
                <li>{item.display}</li>
                {item?.more ? item.more : ""}
              </Link>
            ))}
            <li className="language" style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"5px"}}>
              {" "}
              <AiOutlineGlobal /> 
              <p>VN</p>
            </li>
          </ul>
          {user ? (
            <div className="relative">
              <div className="header__user-info">
                <div className="image">
                  <img alt="user-img" src={user.image ? user.image : avt} />
                </div>
                <div className="username">
                  <p style={{color:"black"}}>{user?.username}</p>
                </div>
              </div>
              <div className="more__user">
                {user.isAdmin=='true' ? (
                  <div
                    className="more__user-info"
                    onClick={() => navigate("admin")}
                  >
                    <GrUserAdmin />
                    <p>Admin Page</p>
                  </div>
                ) : (
                  ""
                )}

                <div
                  className="more__user-info"
                  onClick={() => navigate("info")}
                >
                  <BiUserCircle />
                  <p>Thông tin tài khoản</p>
                </div>

                <div
                  className="more__user-info"
                  onClick={() => navigate("history")}
                >
                  <BiNews />
                  <p>Lịch sử giao dịch</p>
                </div>
                <div
                  className="more__user-info"
                  onClick={() => navigate("product/payment")}
                >
                  <BsCart2 />
                  <p>Giỏ hàng</p>
                </div>
                <div
                  className="more__user-info"
                  onClick={() => {
                    window.localStorage.clear();
                    logoutUser(dispatch, navigate);
                  }}
                >
                  <AiOutlineLogout />
                  <p>Đăng xuất</p>
                </div>
              </div>
            </div>
          ) : (
            <button className="button" onClick={() => navigate("/login")}>
              <span className="button-text">Tài khoản</span>
            </button>
          )}
        </div>
        <div className="icon">
          <AiOutlineMenu
            onClick={() => {
              document.querySelector(".nav__tablet")?.classList.toggle("trans");
              document.querySelector(".overlay")?.classList.toggle("view");
            }}
          />
        </div>
        <div className="overlay"></div>
        <div className="nav__tablet">
          <div
            className="nav__icon"
            onClick={() => {
              document.querySelector(".nav__tablet")?.classList.toggle("trans");
              document.querySelector(".overlay")?.classList.toggle("view");
            }}
          >
            <FaTimes />
          </div>
          <div className="nav__tablet-title">VietFast</div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Header;
