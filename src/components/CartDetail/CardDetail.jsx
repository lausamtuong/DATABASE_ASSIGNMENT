import React, { useState } from "react";
import { deleteCartProduct } from "../../reduxToolkit/apiRequest";

const CardDetail = ({ props,setState }) => {
 
  return (
    <div className="" data-v-42acd70a>
      <div data-v-42acd70a="" class="cart-items">
        {" "}
        <div data-v-42acd70a="" class="cart-item">
          {" "}
          <span class="cart-item__remove"onClick={()=>{
            deleteCartProduct(props.product_id,props.cart_id)
            setState(prev=>!prev)
          }
            }>✕</span>{" "}
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
              <span class="cart-item__thumbnail-quantity">{props.amount}</span>
            </div>
          </div>{" "}
          <div class="cart__column cart__column-right">
            <div class="cart-item__block">
              <div class="cart-item__info">
                <a
                  href="/product/ao-polo-nam-pique-cotton-usa-tham-hut-toi-da-ke-soc"
                  target="_blank"
                  class="cart-item__title"
                >
                  {props.product_name}
                </a>{" "}
                <div class="cart-item__variant">{`${props.size}`}</div>{" "}
              </div>{" "}
              <div class="cart-item__actions">
                <div>
                 
                  <div
                    dir="auto"
                    class="v-select vue-select cart-item__select vs--single vs--unsearchable"
                  >
                    {" "}
                    <div
                      id="vs177__combobox"
                      role="combobox"
                      aria-expanded="false"
                      aria-owns="vs177__listbox"
                      aria-label="Search for option"
                      class="vs__dropdown-toggle"
                    >
                      <div class="vs__selected-options">
                        <span class="vs__selected">XL</span>{" "}
                        <input
                          readonly="readonly"
                          aria-autocomplete="list"
                          aria-labelledby="vs177__combobox"
                          aria-controls="vs177__listbox"
                          type="search"
                          autocomplete="off"
                          class="vs__search"
                        />
                      </div>{" "}
                      <div class="vs__actions">
                        <button
                          type="button"
                          title="Clear Selected"
                          aria-label="Clear Selected"
                          class="vs__clear"
                          style={{ display: "none" }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="10"
                          >
                            <path d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"></path>
                          </svg>
                        </button>{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="10"
                          role="presentation"
                          class="vs__open-indicator"
                        >
                          <path d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"></path>
                        </svg>{" "}
                        <div class="vs__spinner" style={{ display: "none" }}>
                          Loading...
                        </div>
                      </div>
                    </div>{" "}
                    <ul
                      id="vs177__listbox"
                      role="listbox"
                      style={{ display: "none", visible: "hidden" }}
                    ></ul>{" "}
                  </div>
                </div>{" "}
                <div class="cart-item__actions-bottom">
                  <div data-v-3e8bcd48="" class="quantity-box">
                    <button data-v-3e8bcd48="" class="quantity-box__decrease">
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
                    <input
                      data-v-3e8bcd48=""
                      type="text"
                      value={props.amount}
                      onClick={""}
                    />
                    <button data-v-3e8bcd48="" class="quantity-box__increase">
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
                  </div>{" "}
                  <div class="flex flex--column">
                    <span>
                      <b>{props.sell_price.toLocaleString()}{" "}</b>vnđ/1 chiếc
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
