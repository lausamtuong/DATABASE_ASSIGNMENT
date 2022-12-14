import React, { useState } from "react";
import { addToCart } from "../../reduxToolkit/apiRequest";
import { useNavigate } from "react-router-dom";
import Toatify from "../toatify/toatify";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
const CardProduct = ({ item }) => {
  const navigate = useNavigate();
  let user = JSON?.parse(window.localStorage.getItem("user"));
  const handleChoose = (e) => {
    if (!user) alert("Khách hàng cần đăng nhập để mua sắm, Xin cảm ơn!");
    else {
     
      document.querySelector(".notify-product__option").innerHTML =
        "Size " + e.target.value;
      document
        .querySelector(".notify-product__img")
        .setAttribute("src", item.illustration);
      document.querySelector(".notify-product__title").innerHTML =
        item.product_name;
      document
        .querySelector(".notify-product__prices")
        .querySelector("ins").innerHTML =
        item.sell_price.toLocaleString() + " vnđ";
      item = { ...item, size: e.target.value };
      window.localStorage.removeItem("confirm");
      if (item.amount) {
        document.querySelector(".notify").classList.add("is-active");
        addToCart(user.customer_id, item);
      }
      else {
        alert("Lỗi: Sẩn phẩm này đã hết hàng");
      }
      setTimeout(() => {
        document.querySelector(".notify").classList.remove("is-active");
      }, 1500);
    }
  };
  return (
    <>
      <div className="grid__column">
        <div className="product-grid is-shuffle option-changed">
          <div className="product-grid__thumbnail coolactive-tag">
            <div className="product-grid__image">
              <div
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`./detail/${item.product_id}`)}
              >
                <img
                  src={item.illustration}
                  loading="lazy"
                  alt="shirt"
                  data-src={item.illustration}
                />
                <img
                  src={item.illustration}
                  loading="lazy"
                  alt="shirt"
                  className="hover zoom"
                />
              </div>
            </div>
            <span className="product-grid__tags product-grid__tags--new">
              new
            </span>
            <div className="product-grid__reviews">
              <div className="reviews-rating">
                <div className="">{4.9}</div>
                <div className="reviews-rating__star"></div>
                <div className="reviews-rating__number">(3)</div>
              </div>
            </div>
            <div className="product-grid__select">
              <form action="" className="">
                <div
                  data-option-id="tshirt_size"
                  data-option-index="2"
                  data-is-color=""
                  class="option-select"
                >
                  {item.category_id == "CAT0002   " ? (
                    <>
                      <label class="option-select__item">
                        <input
                          type="radio"
                          name="tshirt_size"
                          value="M"
                          onClick={(e) => handleChoose(e)}
                        />
                        <span class="checkmark">38</span>
                      </label>
                      <label class="option-select__item">
                        <input
                          type="radio"
                          name="tshirt_size"
                          value="L"
                          onClick={(e) => handleChoose(e)}
                        />
                        <span class="checkmark">39</span>
                      </label>
                      <label class="option-select__item">
                        <input
                          type="radio"
                          name="tshirt_size"
                          value="XL"
                          onClick={(e) => handleChoose(e)}
                        />
                        <span class="checkmark">40</span>
                      </label>
                      <label class="option-select__item">
                        <input
                          type="radio"
                          name="tshirt_size"
                          value="2XL"
                          onClick={(e) => handleChoose(e)}
                        />
                        <span class="checkmark">41</span>
                      </label>
                      <label class="option-select__item">
                        <input
                          type="radio"
                          name="tshirt_size"
                          value="3XL"
                          onClick={(e) => handleChoose(e)}
                        />
                        <span class="checkmark">42</span>
                      </label>
                      <label class="option-select__item">
                        <input
                          type="radio"
                          name="tshirt_size"
                          value="3XL"
                          onClick={(e) => handleChoose(e)}
                        />
                        <span class="checkmark">43</span>
                      </label>
                      <label class="option-select__item">
                        <input
                          type="radio"
                          name="tshirt_size"
                          value="3XL"
                          onClick={(e) => handleChoose(e)}
                        />
                        <span class="checkmark">44</span>
                      </label>
                      <label class="option-select__item">
                        <input
                          type="radio"
                          name="tshirt_size"
                          value="3XL"
                          onClick={(e) => handleChoose(e)}
                        />
                        <span class="checkmark">45</span>
                      </label>
                    </>
                  ) : (
                    <>
                      <label class="option-select__item">
                        <input
                          type="radio"
                          name="tshirt_size"
                          value="M"
                          onClick={(e) => handleChoose(e)}
                        />
                        <span class="checkmark">M</span>
                      </label>
                      <label class="option-select__item">
                        <input
                          type="radio"
                          name="tshirt_size"
                          value="L"
                          onClick={(e) => handleChoose(e)}
                        />
                        <span class="checkmark">L</span>
                      </label>
                      <label class="option-select__item">
                        <input
                          type="radio"
                          name="tshirt_size"
                          value="XL"
                          onClick={(e) => handleChoose(e)}
                        />
                        <span class="checkmark">XL</span>
                      </label>
                      <label class="option-select__item">
                        <input
                          type="radio"
                          name="tshirt_size"
                          value="2XL"
                          onClick={(e) => handleChoose(e)}
                        />
                        <span class="checkmark">2XL</span>
                      </label>
                      <label class="option-select__item">
                        <input
                          type="radio"
                          name="tshirt_size"
                          value="3XL"
                          onClick={(e) => handleChoose(e)}
                        />
                        <span class="checkmark">3XL</span>
                      </label>
                    </>
                  )}
                </div>
              </form>
            </div>
            <div className=""></div>
          </div>
          <div data-collection-tag="" class="product-grid__content">
            <h3 class="product-grid__title">
              <div
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`./detail/${item.product_id}`)}
                rel-script="product-title"
              >
                {item.product_name}
              </div>
            </h3>{" "}
            <div class="product-grid__prices">
              <div
                rel-script="product-price"
                data-price="349000"
                data-compare-price="399000"
                data-sale="-1"
                className="product-prices"
              >
                <span>
                  Số lượng: {item.amount == "0" ? "Hết hàng" : item.amount}
                </span>
                <ins>{item.sell_price.toLocaleString()}đ</ins>
              </div>
            </div>
            <button
              className="btn buttonHover block"
              onClick={() => navigate(`./detail/${item.product_id}`)}
            >
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>
      <Toatify item={item} />
    </>
  );
};

export default CardProduct;
