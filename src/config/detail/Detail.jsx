import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./detail.scss";

import {

  getDetailProduct,
} from "../../reduxToolkit/apiRequest";
const Detail = () => {
  const params = useParams();
  window.scrollTo(0,0)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [detail,setDetail] = useState()
  const [quantity,setQuantity] = useState(1)
  useEffect(()=>{
    getDetailProduct(params.id).then(res=>setDetail(res[0]));
  },[])


  return (
    <>
      <div className="">
        <section className="product-single__infomation">
          <div className="containerr container--medium">
            <div className="breadcrumb">
              <ol className="page-breadcrumb breadcrumb__list">
                <li>
                  <a href="http://localhost:3000/" className="breadcrumb__item">
                    Trang chủ
                  </a>
                </li>{" "}
                <li>
                  <a
                    href="https://www.coolmate.me/collection/ao-thun-nam"
                    className="breadcrumb__item"
                  >
                  Chi tiết sản phẩm
                  </a>
                </li>
              </ol>
            </div>
            <div className="product-single__wrapper">
              <div className="product-single__images">
                <div className="product-single__thumbnails">
                  <div
                    rel-script="product-gallery-popup"
                    className="product-single__inner"
                  >
                    {" "}
                    <div
                      rel-script="product-thumbnails-slide"
                      className="thumbnails slick-initialized slick-slider slick-dotted"
                    >
                      <div className="slick-list draggable">
                        <div
                          className="slick-track"
                          style={{ opacity: "1", width: "4326px" }}
                        >
                          <a
                            href="#"
                            className="image slick-slide"
                            rel-script="product-lightbox-gallery"
                            data-slick-index="0"
                            aria-hidden="true"
                            style={{
                              width: "721px",
                              position: "relative",
                              left: "0px",
                              top: " 0px",
                              zIndex: "999",
                              opacity: "1",
                            }}
                            tabindex="0"
                            role="tabpanel"
                            id="slick-slide40"
                            aria-describedby="slick-slide-control40"
                          >
                            <img
                              loading="lazy"
                              src={`${detail?.illustration}`}
                              alt="Đen"
                            />
                          </a>
                          <a
                            href=""
                            className="image slick-slide slick-current slick-active"
                            rel-script="product-lightbox-gallery"
                            data-image="https://media.coolmate.me/cdn-cgi/image/quality=100/uploads/April2022/thumb_sat_nach_den.jpg"
                            data-index="0"
                            data-slick-index="1"
                            aria-hidden="false"
                            style={{
                              width: "721px",
                              position: "relative",
                              left: "-721px",
                              top: " 0px",
                              zIndex: " 998",
                              opacity: "0",
                            }}
                            tabindex="-1"
                            role="tabpanel"
                            id="slick-slide41"
                            aria-describedby="slick-slide-control41"
                          >
                            <img
                              src="https://media.coolmate.me/cdn-cgi/image/quality=100/uploads/April2022/thumb_sat_nach_den.jpg"
                              alt="Áo sát nách thể thao nam Dri-Breathe thoáng mát tối đa Đen"
                            />
                          </a>
                          <a
                            href=""
                            className="image slick-slide"
                            rel-script="product-lightbox-gallery"
                            data-image="https://media.coolmate.me/cdn-cgi/image/quality=100/uploads/November2021/17-0_64-copy1.jpg"
                            data-index="1"
                            data-slick-index="2"
                            aria-hidden="true"
                            style={{
                              width: " 721px",
                              position: "relative",
                              left: "-1442px",
                              top: "0px",
                              zIndex: "998",
                              opacity: " 0",
                            }}
                            tabindex="-1"
                            role="tabpanel"
                            id="slick-slide42"
                            aria-describedby="slick-slide-control42"
                          >
                            <img
                              src="https://media.coolmate.me/cdn-cgi/image/quality=100/uploads/November2021/17-0_64-copy1.jpg"
                              alt="Áo sát nách thể thao nam Dri-Breathe thoáng mát tối đa Đen 1"
                            />
                          </a>
                          <a
                            href="#"
                            className="image slick-slide"
                            rel-script="product-lightbox-gallery"
                            data-image="https://media.coolmate.me/cdn-cgi/image/quality=100/uploads/April2022/thumb_sat_nauch_den2.jpg"
                            data-index="2"
                            data-slick-index="3"
                            aria-hidden="true"
                            style={{
                              width: "721px",
                              position: "relative",
                              left: "-2163px",
                              top: "0px",
                              zIndex: "998",
                              opacity: "0",
                            }}
                            tabindex="-1"
                            role="tabpanel"
                            id="slick-slide43"
                            aria-describedby="slick-slide-control43"
                          >
                            <img
                              src="https://media.coolmate.me/cdn-cgi/image/quality=100/uploads/April2022/thumb_sat_nach_den2.jpg"
                              alt="Áo sát nách thể thao nam Dri-Breathe thoáng mát tối đa Đen 2"
                            />
                          </a>
                          <a
                            href="#"
                            className="image slick-slide"
                            rel-script="product-lightbox-gallery"
                            data-image="https://media.coolmate.me/cdn-cgi/image/quality=100/uploads/April2022/thumb_sat_nach_den3.jpg"
                            data-index="3"
                            data-slick-index="4"
                            aria-hidden="true"
                            style={{
                              width: "721px",
                              position: "relative",
                              left: "-2884px",
                              top: "0px",
                              zIndex: "998",
                              opacity: "0",
                            }}
                            tabindex="-1"
                            role="tabpanel"
                            id="slick-slide44"
                            aria-describedby="slick-slide-control44"
                          >
                            <img
                              src="https://media.coolmate.me/cdn-cgi/image/quality=100/uploads/April2022/thumb_sat_nach_den3.jpg"
                              alt="Áo sát nách thể thao nam Dri-Breathe thoáng mát tối đa Đen 3"
                            />
                          </a>
                          <a
                            href="#"
                            className="image slick-slide"
                            rel-script="product-lightbox-gallery"
                            data-image="https://media.coolmate.me/cdn-cgi/image/quality=100/uploads/April2022/thumb_sat_nach_den4.jpg"
                            data-index="4"
                            data-slick-index="5"
                            aria-hidden="true"
                            style={{
                              width: "721px",
                              position: "relative",
                              left: "-3605px",
                              top: "0px",
                              zIndex: "998",
                              opacity: "0",
                            }}
                            tabindex="-1"
                            role="tabpanel"
                            id="slick-slide45"
                            aria-describedby="slick-slide-control45"
                          >
                            <img
                              src="https://media.coolmate.me/cdn-cgi/image/quality=100/uploads/April2022/thumb_sat_nach_den4.jpg"
                              alt="Áo sát nách thể thao nam Dri-Breathe thoáng mát tối đa Đen 4"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                rel-script="product-single-summary"
                className="product-single__summary"
              >
                <div className="product-single__sticky">
                  <h1 className="product-single__title">
                    {detail?.product_name}
                  </h1>
                  <a href="" className="product-single__ratings scroll-to-step">
                    <div
                      data-review-count="183"
                      data-review-avg="4.85"
                      className="reviews-rating"
                    >
                      <div className="reviews-rating__star is-active"></div>
                      <div className="reviews-rating__star is-active"></div>
                      <div className="reviews-rating__star is-active"></div>{" "}
                      <div className="reviews-rating__star is-active"></div>{" "}
                      <div className="reviews-rating__star is-half"></div>{" "}
                      <div className="reviews-rating__count">(183)</div>{" "}
                      <div className="reviews-rating__label">
                        Đã bán (web): 13040{" "}
                      </div>
                    </div>
                  </a>
                  <div className="product-single__price-infomation">
                    <div className="product-single__price-infomation">
                      <div
                        rel-script="product-single-prices"
                        data-compare-price="189000"
                        className="product-single__prices"
                      >
                        <ins>{detail?.sell_price}</ins>
                      </div>{" "}
                      <div className="product-single__pricing">
                        <div>
                          <span className="product-pricing-hint text--primary">
                            Mua nhanh số lượng có hạn
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-single__addtocart">
                    <form action="">
                      <div className="product-single__options">
                        <div className="product-single__options">
                          <div
                            rel-script="product-single-option-item"
                            className="product-single__option"
                          >
                            <div className="option-heading">
                              <span className="option-heading__title">
                                Màu sắc:{" "}
                                <span
                                  rel="product-option-title-color"
                                  className="text--bold"
                                >
                                  Đen
                                </span>
                              </span>
                            </div>{" "}
                            <div
                              data-option-id="color"
                              data-option-index="1"
                              className="option-select option-select--color"
                            >
                              <label className="option-select__item option-select__item--color den">
                                <div className="option-select__inner">
                                  <input
                                    type="radio"
                                    name="color"
                                    value="den"
                                    checked="checked"
                                    data-gallery=""
                                    data-title="Đen"
                                  />
                                  <span
                                    className="checkmark checkmark--color den"
                                    style={{
                                      backgroundImage:
                                        "url('https://media.coolmate.me/cdn-cgi/image/width=80,height=80,quality=80,format=auto/uploads/November2021/17-5_copy_22_copy.jpg')",
                                    }}
                                  ></span>
                                </div>
                              </label>{" "}
                              <label className="option-select__item option-select__item--color trang">
                                <div className="option-select__inner">
                                  <input
                                    type="radio"
                                    name="color"
                                    value="trang"
                                    data-gallery=""
                                    data-title="Trắng"
                                  />{" "}
                                  <span
                                    className="checkmark checkmark--color trang"
                                    style={{
                                      backgroundImage:
                                        'url("https://media.coolmate.me/cdn-cgi/image/width=80,height=80,quality=80,format=auto/uploads/November2021/19-8_copy_4_copy.jpg")',
                                    }}
                                  ></span>
                                </div>
                              </label>{" "}
                              <label className="option-select__item option-select__item--color xam-xanh">
                                <div className="option-select__inner">
                                  <input
                                    type="radio"
                                    name="color"
                                    value="xam-xanh"
                                    data-gallery='[{"id":"2db95f53","src":"\/image\/April2022\/thumb_sat_nach_xam.jpg"},{"id":"68525871","src":"\/uploads\/December2021\/drixam.jpg"},{"id":"8e181aa0","src":"\/image\/April2022\/thumb_sat_nach_xam_2.jpg"},{"id":"74ea92a3","src":"\/image\/April2022\/thumb_sat_nach_xam_3.jpg"},{"id":"cfae3412","src":"\/uploads\/December2021\/18-6_45.jpg"},{"id":"7ccdee09","src":"\/uploads\/December2021\/drixam2.jpg"},{"id":"e34b27a0","src":"\/uploads\/December2021\/18-4_45.jpg"},{"id":"03b35495","src":"\/uploads\/December2021\/18-3_1.jpg"}]'
                                    data-title="Xám Xanh"
                                  />{" "}
                                  <span
                                    className="checkmark checkmark--color xam-xanh"
                                    style={{
                                      backgroundImage:
                                        'url("https://media.coolmate.me/cdn-cgi/image/width=80,height=80,quality=80,format=auto/uploads/December2021/18-3_1.jpg")',
                                    }}
                                  ></span>
                                </div>
                              </label>
                            </div>
                          </div>{" "}
                          <div
                            rel-script="product-single-option-item"
                            className="product-single__option"
                          >
                            <div className="option-heading">
                              <span className="option-heading__title">
                                Kích thước Áo:{" "}
                                <span
                                  rel="product-option-title-tshirt_size"
                                  className="text--bold"
                                ></span>
                              </span>{" "}
                              <a
                                href="#size-guide"
                                rel-script="toggle-size-guide"
                                className="option-heading__sizeguide"
                              >
                                Hướng dẫn chọn size
                              </a>
                            </div>{" "}
                            <div
                              data-option-id="tshirt_size"
                              data-option-index="2"
                              className="option-select option-select--tshirt_size"
                            >
                              <label className="option-select__item s">
                                <div className="option-select__inner">
                                  <input
                                    type="radio"
                                    name="tshirt_size"
                                    value="s"
                                    data-title="S"
                                  />{" "}
                                  <span className="checkmark">S</span>
                                </div>
                              </label>{" "}
                              <label className="option-select__item m">
                                <div className="option-select__inner">
                                  <input
                                    type="radio"
                                    name="tshirt_size"
                                    value="m"
                                    data-title="M"
                                  />{" "}
                                  <span className="checkmark">M</span>
                                </div>
                              </label>{" "}
                              <label className="option-select__item l">
                                <div className="option-select__inner">
                                  <input
                                    type="radio"
                                    name="tshirt_size"
                                    value="l"
                                    data-title="L"
                                  />{" "}
                                  <span className="checkmark">L</span>
                                </div>
                              </label>{" "}
                              <label className="option-select__item xl">
                                <div className="option-select__inner">
                                  <input
                                    type="radio"
                                    name="tshirt_size"
                                    value="xl"
                                    data-title="XL"
                                  />{" "}
                                  <span className="checkmark">XL</span>
                                </div>
                              </label>{" "}
                              <label className="option-select__item 2xl">
                                <div className="option-select__inner">
                                  <input
                                    type="radio"
                                    name="tshirt_size"
                                    value="2xl"
                                    data-title="2XL"
                                  />{" "}
                                  <span className="checkmark">2XL</span>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-single__actions">
                        <div className="product-single__actions">
                          <div className="product-single__quantity">
                            <div rel-script="quantity-change" className="quantity">
                              <div  className="quantity__reduce cursor" onClick={()=>setQuantity(prev=>prev-1)}>
                                -
                              </div>{" "}
                             <p className="quan">{quantity}</p>
                              <div className="quantity__augure cursor"onClick={()=>setQuantity(prev=>prev+1)}>
                                +
                              </div>
                            </div>
                          </div>{" "}
                          <div className="product-single__button">
                            <a
                              href="#"
                              data-product-id="60b89df4c61b1f470f7d0f66"
                              data-variant-id=""
                              data-quantity="1"
                              rel-script="product-add-to-cart"
                              className="btn"
                            >
                              Chọn kích thước áo{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="product-single__policy">
                    <div className="product-single__policy">
                      <div className="product-policy">
                        <div className="product-policy__item">
                          <div className="product-policy__icon">
                            <img
                              src="https://www.coolmate.me/images/icons/icon3.svg"
                              alt="Đổi trả với số điện thoại"
                            />
                          </div>{" "}
                          <span className="product-policy__title">
                            Đổi trả cực dễ
                            <br /> chỉ cần số điện thoại
                          </span>
                        </div>{" "}
                        <div className="product-policy__item">
                          <div className="product-policy__icon">
                            <img
                              src="https://www.coolmate.me/images/icons/icon4.svg"
                              alt="Miễn phí vận chuyển"
                            />
                          </div>{" "}
                          <span className="product-policy__title">
                            Miễn phí vận chuyển
                            <br /> cho đơn hàng trên 200k
                          </span>
                        </div>{" "}
                        <div className="product-policy__item">
                          <div className="product-policy__icon">
                            <img
                              src="https://www.coolmate.me/images/icons/icon5.svg"
                              alt="Đổi hàng trong 60 ngày"
                            />
                          </div>{" "}
                          <span className="product-policy__title">
                            60 ngày đổi trả
                            <br /> vì bất kỳ lý do gì
                          </span>
                        </div>{" "}
                        <div className="product-policy__item">
                          <div className="product-policy__icon">
                            <img
                              src="https://www.coolmate.me/images/icons/icon2.svg"
                              alt="Hotline 1900.27.27.37"
                              style={{ width: "25px" }}
                            />
                          </div>{" "}
                          <span className="product-policy__title">
                            Hotline 1900.27.27.37 <br />
                            hỗ trợ từ 8h30 - 22h mỗi ngày
                          </span>
                        </div>{" "}
                        <div className="product-policy__item">
                          <div className="product-policy__icon">
                            <img
                              src="https://www.coolmate.me/images/icons/icon1.svg"
                              alt="Trả hàng tận nơi"
                            />
                          </div>{" "}
                          <span className="product-policy__title">
                            Đến tận nơi nhận hàng trả,
                            <br /> hoàn tiền trong 24h
                          </span>
                        </div>{" "}
                        <div className="product-policy__item">
                          <div className="product-policy__icon">
                            <img
                              src="https://www.coolmate.me/images/icons/icon6.svg"
                              alt="Giao hàng"
                            />
                          </div>{" "}
                          <span className="product-policy__title">
                            Giao hàng nhanh toàn quốc
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-single__features">
                    <div className="product-features">
                      <a
                        href="#features-listing"
                        className="product-features__heading is-active"
                        rel-script="features-toggle"
                      >
                        Đặc điểm nổi bật
                      </a>{" "}
                      <div
                        id="features-listing"
                        className="product-features__listing"
                        style={{display: "block"}}
                      >
                        <div className="product-features__item">
                          Chất liệu 100% Recycle Polyester
                        </div>{" "}
                        <div className="product-features__item">
                          Vải được xử lý hoàn thiện theo công nghệ Wicking
                          (thoáng khí) &amp; Quick-Dry (Nhanh khô)
                        </div>{" "}
                        <div className="product-features__item">
                          Sản phẩm theo xu hướng thời trang bền vững với chất
                          liệu Recycle
                        </div>{" "}
                        <div className="product-features__item">
                          Kiểu dáng áo thun thể thao vừa vặn với dáng nam giới
                          Việt Nam
                        </div>{" "}
                        <div className="product-features__item">
                          Nhà cung cấp vải hàng đầu thế giới trong lĩnh vực đồ
                          thể thao: Promax
                        </div>{" "}
                        <div className="product-features__item">
                          <span>
                            {" "}
                            Tự hào may và hoàn thiện tại nhà máy Nobland, Bình
                            Dương *{" "}
                            <a
                              href="https://s.coolmate.me/mnspe"
                              className="text--primary"
                            >
                              Xem nhà máy &gt;
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="product-single__description">
          .container
        </section>
      </div>
    </>
  );
};

export default Detail;
