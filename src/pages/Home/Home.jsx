import React, { useEffect, useState } from "react";
import "./style.scss";
import video from "../../images/home__vd.mp4";
import v_light from "../../images/Vlight.svg";
import cntm_1 from "../../images/cntm_1.png";
import cntm_2 from "../../images/cntm_2png.png";
import cntm_3 from "../../images/cntm_3.png";
import cntm_4 from "../../images/cntm_4.png";
import cntm_5 from "../../images/cntm_5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import Card from "../../components/Card/Card";
import LuxA20 from "../../images/A20.gif";
import LuxA20_ from "../../images/LuxA_.png";
import Fadil from "../../images/Fadil-360.gif";
import Fadil_ from "../../images/Fadil 1_.png";
import LuxSA from "../../images/LuxSA20.gif";
import LuxSA_ from "../../images/LuxSA_.png";
import Pre from "../../images/Pre.gif";
import Pre_ from "../../images/president_.png";
import VFe34 from "../../images/Vfe34.gif";
import VFe34_ from "../../images/VFe34_.png";
import xe_may from "../../images/xe-may-dien.mp4";
import vlight_up from "../../images/Vlight-up.png";
import vlight_down from "../../images/Vlight-down.png";
import klaraA2_ from "../../images/klaraA2_.png";
import tempest_ from "../../images/tempest_.png";
import klaraS_ from "../../images/klaraS_.png";
import feliz_ from "../../images/feliz_.png";
import theon_ from "../../images/theon_.png";
import bg_tab from "../../images/bg.jpg";
import bg_mobile from "../../images/bg_mobile.png";
import { useDispatch, useSelector } from "react-redux";
import MessengerCustomerChat from "react-messenger-customer-chat";
import { loginUser } from "../../reduxToolkit/apiRequest";
import { useNavigate } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import TextField from "@mui/material/TextField";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { Avatar, Button, Input } from "@nextui-org/react";

const ListCar = [
  {
    img: LuxA20_,
    gif: LuxA20,
    title: "Tận hưởng từng khoảnh khắc",
    name: "LUX A2.0",
    type: "SEDAN",
    price: "từ 949 triệu",
    params: "852e08d81c1fbb0662d06e45e4e24216",
  },
  {
    img: Fadil_,
    gif: Fadil,
    title: "Tối ưu mọi trải nghiệm",
    name: "FADIL",
    type: "HATCHBACK",
    price: "từ 382 triệu",
    params: "10a8089a99d768720e714c4ea2d31bc1",
  },
  {
    img: LuxSA_,
    gif: LuxSA,
    title: "Chinh phục mọi cung đường",
    name: "LUX SA2.0",
    type: "SUV",
    price: "từ 1.2 tỷ",
    params: "6b8d7fcc6d6935e68cbb0c9463123c0a",
  },
  {
    img: VFe34_,
    gif: VFe34,
    title: "Cùng bạn bứt phá mọi giới hạn",
    name: "VF e34",
    type: "SUV",
    price: "690 triệu",
    params: "4595e77181130d268b637271ebfc0008",
  },
  {
    img: Pre_,
    gif: Pre,
    title: "Dấu ấn người thủ lĩnh",
    name: "PRESIDENT",
    type: "SUV",
    price: "từ 3.8 tỷ",
    params: "f260104e761c83997b267621c1ff11e3",
  },
];
const ListMoto = [
  {
    img: theon_,
    gif: theon_,
    title: "Công nghệ bứt phá đỉnh cao",
    name: "THEON",
    type: "CAO CẤP",
    price: "63.9 triệu",
  },
  {
    img: feliz_,
    gif: feliz_,
    title: "Sống xanh thanh lịch",
    name: "FELIZ",
    type: "TRUNG CẤP",
    price: "24.9 triệu",
    params: "a2eea0d38e433c288b4fab47862c574c",
  },
  {
    img: klaraS_,
    gif: klaraS_,
    title: "Khởi đầu phong cách mới",
    name: "KLARA S",
    type: "TRUNG CẤP",
    price: "39.9 triệu",
    params: "27cd252a8e5cd53f76aec0e5ba8af043",
  },
  {
    img: tempest_,
    gif: tempest_,
    title: "Tỏa khí chất - Hút ánh nhìn",
    name: "TEMPEST",
    type: "PHỔ THÔNG",
    price: "19.25 triệu",
    params: "0dad95c3f89c96b58d8d34d23d75136f",
  },
  {
    img: klaraA2_,
    gif: klaraA2_,
    title: "Sống xanh thanh lịch",
    name: "KLARA A2",
    type: "TRUNG CẤP",
    price: "26.9 triệu",
    params: "f4b6854c76fbc79c2528dabbf7c4a495",
  },
];
const Home = ({ width }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ITEM = useSelector((state) => state.auth.API.CAR);
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
    </div>
  );
};

export default Home;
