import React, { useState } from "react";
import {
  addToCart,
  deleteCartProduct,
  updateCartProduct,
} from "../../reduxToolkit/apiRequest";

const CardDetail = ({ props, setState, confirmOrder }) => {
  const [soLuong, setSoLuong] = useState(props.amount);
  let order_id = JSON?.parse(window.localStorage.getItem("order_id"));
  order_id = order_id?.order_id;
  const [size, setSize] = useState("S");
  return (
    <div className="" data-v-42acd70a>
      <div data-v-42acd70a="" class="cart-items">
        {" "}
        <div data-v-42acd70a="" class="cart-item">
          {!confirmOrder && (
            <span
              class="cart-item__remove"
              onClick={() => {
                deleteCartProduct(props.product_id, props.cart_id);
                setState((prev) => !prev);
              }}
            >
              ✕
            </span>
          )}
          <div class="cart__column cart__column-left">
            <div class="cart-item__thumbnail-block">
              <img
                src={props.illustration}
                alt="Áo Polo nam Pique Cotton USA thấm hút tối đa (kẻ sọc)"
                class="cart-item__thumbnail"
              />{" "}
              <div class="cart-item__multiselect">
                <label
                  for="select633403d673946b769949408d4d22def6"
                  class="custom-checkbox-label"
                >
                  <span class="custom-checkbox">
                    <input
                      type="checkbox"
                      id="select633403d673946b769949408d4d22def6"
                    />
                    <span class="checkmark"></span>
                  </span>
                </label>
              </div>{" "}
              <span class="cart-item__thumbnail-quantity">{soLuong}</span>
            </div>
          </div>{" "}
          <div class="cart__column cart__column-right">
            <div class="cart-item__block">
              <div class="cart-item__info">
                <a
                  href={`/product/detail/${props.product_id}`}
                  target="_blank"
                  class="cart-item__title"
                  style={{fontSize:"16px"}}
                >
                  {props.product_name}
                </a>{" "}
                <div class="cart-item__variant"><i>SIZE:</i> <b>{size}</b></div>{" "}
              </div>{" "}
              <div class="cart-item__actions">
                <div>
                  <div
                    dir="auto"
                    class="v-select vue-select cart-item__select vs--single vs--unsearchable"
                  >
                    {!confirmOrder && (
                      <select
                        id="manufacturer"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        name="manufacturer_id"
                        style={{
                          fontWeight: "bold",
                          fontSize: "18px",
                          height: "30px",
                          padding: "0px 0px 0px 20px",
                        }}
                      >
                        <option value="S  ">S</option>
                        <option value="M  ">M</option>
                        <option value="L  ">L</option>
                        <option value="XL  ">XL</option>
                        <option value="2XL  ">2XL</option>
                        <option value="3XL  ">3XL</option>
                      </select>
                    )}
                    <ul
                      id="vs177__listbox"
                      role="listbox"
                      style={{ display: "none", visible: "hidden" }}
                    ></ul>{" "}
                  </div>
                </div>{" "}
                <div class="cart-item__actions-bottom">
                  {!confirmOrder ? (
                    <div data-v-3e8bcd48="" class="quantity-box">
                      <button
                        data-v-3e8bcd48=""
                        class="quantity-box__decrease"
                        onClick={() => {
                          setSoLuong((prev) => prev - 1);
                          setState((prev) => !prev);
                          updateCartProduct(
                            order_id,
                            props.product_id,
                            props.cart_id,
                            soLuong - 1
                          );
                        }}
                      >
                        <svg
                          data-v-3e8bcd48=""
                          width="16"
                          height="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g data-v-3e8bcd48="">
                            <line
                              data-v-3e8bcd48=""
                              stroke-width="1.5"
                              id="svg_6"
                              y2="8"
                              x2="10"
                              y1="8"
                              x1="5"
                              stroke="#000000"
                              fill="none"
                            ></line>
                          </g>
                        </svg>
                      </button>
                      <input data-v-3e8bcd48="" type="text" value={soLuong} />
                      <button
                        data-v-3e8bcd48=""
                        class="quantity-box__increase"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setSoLuong((prev) => prev + 1);
                          setState((prev) => !prev);
                          updateCartProduct(
                            order_id,
                            props.product_id,
                            props.cart_id,
                            soLuong + 1
                          );
                        }}
                      >
                        <svg
                          data-v-3e8bcd48=""
                          width="16"
                          height="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g data-v-3e8bcd48="">
                            <line
                              data-v-3e8bcd48=""
                              stroke-width="1.5"
                              y2="8"
                              x2="12.9695"
                              y1="8"
                              x1="3.0305"
                              stroke="#000000"
                              fill="none"
                            ></line>{" "}
                            <line
                              data-v-3e8bcd48=""
                              stroke-width="1.5"
                              transform="rotate(90, 8, 8)"
                              y2="8"
                              x2="13"
                              y1="8"
                              x1="3"
                              stroke="#000000"
                              fill="none"
                            ></line>
                          </g>
                        </svg>
                      </button>
                    </div>
                  ):(
                    <>
                    <p><i>Số lượng: <b>{soLuong}</b></i></p>
                    </>
                  )}

                  <div class="flex flex--column">
                    <span>
                      <b>Giá: {props.sell_price.toLocaleString()} </b>vnđ/1
                    </span>{" "}
                    <span>
                      <b>
                        Tổng: {(props.sell_price * soLuong).toLocaleString()}{" "}
                      </b>
                      vnđ
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default CardDetail;
