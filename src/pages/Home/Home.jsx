import React, { useEffect, useState } from "react";
import "./style.scss";

import v_light from "../../images/Vlight.svg";
import vlight_up from "../../images/Vlight-up.png"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";

import bg_tab from "../../images/bg.jpg";
import bg_mobile from "../../images/bg_mobile.png";

import MessengerCustomerChat from "react-messenger-customer-chat";


import { AiFillEdit } from "react-icons/ai";
import TextField from "@mui/material/TextField";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { Avatar, Button, Input } from "@nextui-org/react";


const Home = () => {
  const user = JSON.parse(window.localStorage.getItem("user"));
  const [selectedImage, setSelectedImage] = useState();

  const saveFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };
  const removeSelectedImage = () => {
    setSelectedImage();
  };
  // useEffect(() => {
  //   if (user != "") loginUser(user, dispatch, navigate);
  // }, []);
  window.scrollTo(0, 0);
  return (
    <div className="Home__wrapper">
      <div className="Home__video">
        {selectedImage ? (
          <img src={URL.createObjectURL(selectedImage)} alt="Thumb" />
        ) : (
          <video autoPlay playsInline muted loop>
            <source
              src="https://mcdn.coolmate.me/uploads/videos/POLO_PROMAX-S1.mp4"
              type="video/mp4"
            />
          </video>
        )}
      </div>
      <div className="container-fluid cta-button">
        <div className="row justify-content-center">
          {" "}
          <a
            className="deposit"
            href="https://reserve.vinfastauto.com/"
            onClick="gtag_custom_link(this);"
          >
            Mua Ngay
          </a>{" "}
          <a
            className="more-information"
            href="https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwb84ed557/raisinghands/documents/VF8-VF9_Brochure.pdf"
            onClick="gtag_custom_link(this);"
          >
            Tìm hiểu thêm
          </a>
        </div>
      </div>
      <div className="v-light">
        <img alt="v-light" src={v_light} />
      </div>
      <div className="block-new-home-cntm">
        <div className="container-fluid">
          <div className="swiper-box">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              autoplay={true}
            >
              <SwiperSlide>
                {" "}
                <div className="swiper_item">
                  <div className="swiper_item-head">
                    <h1 className="swiper_item-name">
                      Chất liệu cho tương lai
                    </h1>
                    <p className="swiper_item-des">
                      Đặt khách hàng làm trọng tâm, các mẫu sản phẩm của
                      Coolmate được ứng dụng những công nghệ ưu việt hàng đầu
                      thế giới, mở ra cảm giác tiện nghi, thoải mái, hoàn hảo
                      cùng trải nghiệm cá nhân hóa đáng giá nhất.
                    </p>
                  </div>
                  <div className="swiper_item-body">
                    <img
                      src={
                        "https://media.coolmate.me/cdn-cgi/image/width=1920,quality=100,format=auto/uploads/July2022/Banner-Coolmate-Active-opt-1.jpeg"
                      }
                      atl=""
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="swiper_item">
                  <div className="swiper_item-head">
                    <h1 className="swiper_item-name">Đẳng cấp quốc tế</h1>
                    <p className="swiper_item-des">
                      Đặt sự an tâm của khách hàng lên trên hết, đáp ứng tiêu
                      chuẩn khắt khe của các tổ chức đánh giá sản phẩm uy tín
                      hàng đầu thế giới như ASEAN NCAP, EURO NCAP, NHTSA...
                    </p>
                  </div>
                  <div className="swiper_item-body">
                    <img
                      src={
                        "https://media.coolmate.me/cdn-cgi/image/width=1920,quality=100,format=auto/uploads/October2022/Hero-BST-Dong-ppp_21.jpeg"
                      }
                      atl=""
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="swiper_item">
                  <div className="swiper_item-head">
                    <h1 className="swiper_item-name">
                      Dòng sản phẩm công nghệ EXCOOL
                    </h1>
                    <p className="swiper_item-des">
                      Công nghệ Việt cho người Việt. Với hơn 100.000 sản phẩm đã
                      được gửi đến tay khách hàng sử dụng và hài lòng
                    </p>
                  </div>
                  <div className="swiper_item-body">
                    <img
                      src={
                        "https://media.coolmate.me/cdn-cgi/image/width=1920,quality=100,format=auto/uploads/July2022/Excool-Banner-website.jpeg"
                      }
                      atl=""
                    />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="coolclub-abouts">
        <h2 className="coolclub-abouts__heading">Coolmate Basics</h2>
        <div className="coolclub-abouts__wrapper">
          <div className="coolclub-abouts__content">
            <div className="coolclub-abouts__box">
              <a href="/" className="">
                <img
                  src="https://mcdn.coolmate.me/image/July2022/mceclip0_32.png"
                  alt="image"
                />
              </a>
            </div>
            <div className="coolclub-abouts__box">
              <a href="/" className="">
                <img
                  src="https://mcdn.coolmate.me/image/September2022/mceclip1_11.png"
                  alt="image"
                />
              </a>
            </div>
            <div className="coolclub-abouts__box">
              <a href="/" className="">
                <img
                  src="https://mcdn.coolmate.me/uploads/January2022/CoolmateBasic3.png"
                  alt="image"
                />
              </a>
            </div>
            <div className="coolclub-abouts__box">
              <a href="/" className="">
                <img
                  src="https://mcdn.coolmate.me/uploads/February2022/Mask_Group_(2).png"
                  alt="image"
                />
              </a>
            </div>
            <div className="coolclub-abouts__box">
              <a href="/" className="">
                <img
                  src="https://mcdn.coolmate.me/uploads/January2022/CoolmateBasic4.png"
                  alt="image"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="block-newhome-videomiddle">
        <div className="v-light absolute">
          <img src={vlight_up} />
        </div>
        <video autoPlay playsInline muted loop>
          <source
            src={"https://mcdn.coolmate.me/uploads/videos/7-%20FUNCTION.mp4"}
            type="video/mp4"
          />
        </video>
      </div>
      <section class="homepage-collections">
        <div className="containerr container--full">
          <div className="gridd">
            <div className="gridd__column three-twelfths mobile--one-half">
              <a href="/" className="">
                <div className="collection-grid__thumbnail">
                  <img
                    src="https://mcdn.coolmate.me/image/June2022/mceclip0_43.jpg"
                    alt=""
                  />
                  <span className="collection-grid__title">Đồ Mặc Trong</span>
                </div>
              </a>
            </div>
            <div className="gridd__column three-twelfths mobile--one-half">
              <a href="/" className="">
                <div className="collection-grid__thumbnail">
                  <img
                    src="https://mcdn.coolmate.me/image/June2022/mceclip0_99.jpg"
                    alt=""
                  />
                  <span className="collection-grid__title"> Mặc Hàng Ngày</span>
                </div>
              </a>
            </div>
            <div className="gridd__column three-twelfths mobile--one-half">
              <a href="/" className="">
                <div className="collection-grid__thumbnail">
                  <img
                    src="https://mcdn.coolmate.me/image/June2022/mceclip1_56.jpg"
                    alt=""
                  />
                  <span className="collection-grid__title">Đồ Thể Thao</span>
                </div>
              </a>
            </div>
            <div className="gridd__column three-twelfths mobile--one-half">
              <a href="/" className="">
                <div className="collection-grid__thumbnail">
                  <img
                    src="https://mcdn.coolmate.me/image/June2022/mceclip1_61.jpg"
                    alt=""
                  />
                  <span className="collection-grid__title">Tất cả</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="block-new-home-testimonial">
        <img
          alt="background-tablet"
          className="background-tablet"
          src={bg_tab}
        />
        <img
          alt="background-mobile"
          className="background-mobile"
          src={bg_mobile}
        />
        <div className="background__title">
          <p> Trải nghiệm mua sắm hài lòng với #Coolmate</p>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={true}
          >
            <SwiperSlide>
              <p className="slogan">
                "Giá cả hợp lý"
              </p>
              <p className="author">- Top Gear -</p>
            </SwiperSlide>
            <SwiperSlide>
              <p className="slogan">
                “Dịch vụ 100% hài lòng”
              </p>
              <p className="author">- CNBC -</p>
            </SwiperSlide>
            <SwiperSlide>
              <p className="slogan">
                “Dịch vụ 100% hài lòng...”
              </p>
              <p className="author">- Bloomberg -</p>
            </SwiperSlide>
            <SwiperSlide>
              <p className="slogan">
                “Tự hào sản xuất tại Việt Nam.”
              </p>
              <p className="author">- Chenkie -</p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {user?.isAdmin == "true" ? (
        <div className="model_contact">
          <AiFillEdit
            onClick={() =>
              document.querySelector(".popup-edit").classList.toggle("none")
            }
          />
        </div>
      ) : (
        ""
      )}
      <div className="popup-edit none">
        <div className="popup_box">
          <h2>Quản lý trang public</h2>
          <div className="popup_box_content">
            <p>Thay đổi ảnh nền</p>
            <div className="imgUpdate">
              {selectedImage && (
                <div className="imageChose">
                  <img src={URL.createObjectURL(selectedImage)} alt="Thumb" />
                  <div className="removeImage" onClick={removeSelectedImage}>
                    <Button shadow auto color="error">
                      Remove this image
                    </Button>
                  </div>
                </div>
              )}
              {!selectedImage && (
                <label htmlFor="imageFile" className="inputImage">
                  {/* <Button type="button"> */}
                  <AddPhotoAlternateIcon style={{ color: "#ffffff" }} />
                  <span>Import Your Image</span>
                  <input
                    type="file"
                    accept="image/*"
                    id="imageFile"
                    onChange={(e) => {
                      saveFile(e);
                    }}
                    hidden
                  />
                  {/* </Button> */}
                </label>
              )}
            </div>
          </div>
          <div className="popup_box_content">
            <p>Thay đổi Tên Công Ty </p>
            <TextField id="filled-basic" label="VietFast" variant="filled" />
          </div>
          <div className="popup_box_btn">
            <Button
              variant="contained"
              onClick={() =>
                document.querySelector(".popup-edit").classList.toggle("none")
              }
            >
              Hoàn tất
            </Button>
          </div>
        </div>
      </div>
      <MessengerCustomerChat
    pageId="1426771290948216"
    appId="668526127603326"
    
  />,
    </div>
  );
};

export default Home;
