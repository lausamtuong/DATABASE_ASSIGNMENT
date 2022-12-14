import React, { useEffect, useState } from "react";
import "./style.scss";

import v_light from "../../images/Vlight.svg";
import vlight_up from "../../images/Vlight-up.png"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";

import bg_tab from "../../images/bg.jpg";
import bg_mobile from "../../images/bg_mobile.png";




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
            T??m hi???u th??m
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
                      Ch???t li???u cho t????ng lai
                    </h1>
                    <p className="swiper_item-des">
                      ?????t kh??ch h??ng l??m tr???ng t??m, c??c m???u s???n ph???m c???a
                      Coolmate ???????c ???ng d???ng nh???ng c??ng ngh??? ??u vi???t h??ng ?????u
                      th??? gi???i, m??? ra c???m gi??c ti???n nghi, tho???i m??i, ho??n h???o
                      c??ng tr???i nghi???m c?? nh??n h??a ????ng gi?? nh???t.
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
                    <h1 className="swiper_item-name">?????ng c???p qu???c t???</h1>
                    <p className="swiper_item-des">
                      ?????t s??? an t??m c???a kh??ch h??ng l??n tr??n h???t, ????p ???ng ti??u
                      chu???n kh???t khe c???a c??c t??? ch???c ????nh gi?? s???n ph???m uy t??n
                      h??ng ?????u th??? gi???i nh?? ASEAN NCAP, EURO NCAP, NHTSA...
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
                      D??ng s???n ph???m c??ng ngh??? EXCOOL
                    </h1>
                    <p className="swiper_item-des">
                      C??ng ngh??? Vi???t cho ng?????i Vi???t. V???i h??n 100.000 s???n ph???m ????
                      ???????c g???i ?????n tay kh??ch h??ng s??? d???ng v?? h??i l??ng
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
                  <span className="collection-grid__title">????? M???c Trong</span>
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
                  <span className="collection-grid__title"> M???c H??ng Ng??y</span>
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
                  <span className="collection-grid__title">????? Th??? Thao</span>
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
                  <span className="collection-grid__title">T???t c???</span>
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
          <p> Tr???i nghi???m mua s???m h??i l??ng v???i #Coolmate</p>
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
                "Gi?? c??? h???p l??"
              </p>
              <p className="author">- Top Gear -</p>
            </SwiperSlide>
            <SwiperSlide>
              <p className="slogan">
                ???D???ch v??? 100% h??i l??ng???
              </p>
              <p className="author">- CNBC -</p>
            </SwiperSlide>
            <SwiperSlide>
              <p className="slogan">
                ???D???ch v??? 100% h??i l??ng...???
              </p>
              <p className="author">- Bloomberg -</p>
            </SwiperSlide>
            <SwiperSlide>
              <p className="slogan">
                ???T??? h??o s???n xu???t t???i Vi???t Nam.???
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
          <h2>Qu???n l?? trang public</h2>
          <div className="popup_box_content">
            <p>Thay ?????i ???nh n???n</p>
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
            <p>Thay ?????i T??n C??ng Ty </p>
            <TextField id="filled-basic" label="VietFast" variant="filled" />
          </div>
          <div className="popup_box_btn">
            <Button
              variant="contained"
              onClick={() =>
                document.querySelector(".popup-edit").classList.toggle("none")
              }
            >
              Ho??n t???t
            </Button>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Home;
