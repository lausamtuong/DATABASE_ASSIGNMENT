import React, { useState } from "react";
import "./style.css";
import logo from "../../images/footer.png";
import {
  AiOutlineDown,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FcNext } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
const items = [
  { name: "Giới thiệu", active: false,sudo:["Về Coolmate","Về VietGroup", "Về Investor"] },
  { name: "Xe ô tô", active: false,sudo:["VF e34","LUX SA2.0", "LUX A2.0","FAdil"]},
  { name: "Xe máy điện", active: false ,sudo:["Theon","Klara A2","Impes","LuDo","Tempest"]},
  { name: "Tin nổi bật", active: false ,sudo:["Ưu đãi","Công Ty", "Cộng đồng"]},
];
const Footer = () => {
  const [active, setActive] = useState(items);
  return (
    <div className="footer">
     
      <div className="footer__sub">
        <div className="footer__left">
         
          <div className="footer__left-info">
            <h2>COOLMATE lắng nghe bạn!</h2>
            <div>
              <h4>
                Số đăng ký kinh doanh: <span className="slim">0108926276</span>
              </h4>
              <h4>
                Đăng ký lần đầu:{" "}
                <span className="slim">Ngày 01 tháng 10 năm 2019</span>
              </h4>
              <h4>
                Đăng ký thay đổi lần thứ 3:{" "}
                <span className="slim"> Ngày 17 tháng 03 năm 2020</span>
              </h4>
              <h4>
                Nơi cấp:{" "}
                <span className="slim">
                  Sở Kế hoạch và Đầu tư Thành phố Hà Nội
                </span>
              </h4>
            </div>
            <h4>
              Địa chỉ:
              <span className="slim">
                {" "}
                Số 7, đường Bằng Lăng 1, Khu đô thị sinh thái Coolhome
                Riverside, Phường Việt Hưng, Quận Long Biên, Thành phố Hà Nội,
                Việt Nam
              </span>
            </h4>
          </div>
        </div>
        <div className="footer__mid">
          <div className="footer__mid-info">
            {items.map((item, index) => (
              <div className="relative" key={index}>
                {!item.active ? (
                  <>
                    <p>{item.name}</p>
                    <AiOutlineDown className="cursor"
                      onClick={() => {
                        const newArr = items.map((e, i) => {
                          if (index == i) e.active = !e.active;
                          else e.active = false;
                          return e;
                        });
                        setActive(newArr);
                      }}
                    />
                  </>
                ) : (
                  <>
                    <p className="sudo__active">{item.name}</p>
                    <FcNext
                    className="cursor"
                      onClick={() => {
                        const newArr = items.map((e, i) => {
                          if (index == i) e.active = !e.active;
                          return e;
                        });
                        setActive(newArr);
                      }}
                    />
                    <div className="sudo">
                     {item.sudo.map((e,i)=>(
                       <p className="sudo__item" key={i}>{e}</p>
                     ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
          <div className="footer__mid-contact">
            <p>HOTLINE</p>
            <div>
              <AiOutlinePhone />
              <a href="#   ">0123456789</a>
            </div>
            <div>
              <AiOutlineMail />
              <a href="#">laptrinhweb@hcmut.edu.vn</a>
            </div>

            <p>Kết nối với Coolmate</p>
            <div>
              {" "}
              <div className="logo__icon yt">
                <AiOutlineYoutube />
              </div>
              <div className="logo__icon fb">
                <BsFacebook />
              </div>
            </div>
          </div>
        </div>
        <div className="footer__right">
          <div>Đăng ký nhận thông tin</div>
          <div>
            Đăng ký nhận thông tin chương trình khuyến mãi, dịch vụ từ Coolmate
          </div>
          <div>
            <input
              type="text"
              placeholder="Nhập email của quý khách"
              className="footer__input"
            />
            <button className="footer__input-btn">Đăng kí</button>
          </div>
          <div>
            Bằng cách đăng ký, Quý khách xác nhận đã đọc, hiểu và đồng ý với
           <span className="blue"> Chính sách quyền riêng tư </span>của Coolmate.
          </div>
        </div>
      </div>
      <div className="footer__sign">
        Coolmate. All rights reserved. © Copyright 2020
      </div>
    </div>
  );
};

export default Footer;
