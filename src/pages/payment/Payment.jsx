import React, { useEffect, useState } from "react";
import "./payment.scss";
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";
import CardDetail from "../../components/CartDetail/CardDetail";
import {
  deleteOrderProduct,
  getAllPromotions,
  getCart,
  getProductCart,
  getTotalMoneyOrder,
  insertOrder,
  insertProductOrder,
  payment,
} from "../../reduxToolkit/apiRequest";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: #ffffff;
`;
const Payment = () => {
  let user = JSON?.parse(window.localStorage.getItem("user"));
  const [order_id, setOrder_id] = useState();
  //  if(window.localStorage.getItem("order_id")!=undefined)
  //     order_id = JSON?.parse(window.localStorage.getItem("order_id"));
  let confirm = JSON?.parse(window.localStorage.getItem("confirm"));
  const [cart, setCart] = useState([]);
  const [state, setState] = useState(false);
  const [listPromotions, setListPromotions] = useState([]);
  const [indexActive, setIndexActive] = useState(null);
  const [active, setActive] = useState([0, 0, 0, 0, 0, 0]);
  const [confirmOrder, setConfirmOrder] = useState(confirm);
  const [giamGia, setGiamGia] = useState({
    percent: 0,
    min: 0,
    max: 0,
    start_date: "",
    end_date: "",
  });
  let [loading, setLoading] = useState(false);
  const [totalOrder, setTotalOrder] = useState("");
  const [sender, setSender] = useState({
    name: "",
    phoneNumber: "",
    address: "",
    email: "",
    customer_id: "",
    order_id: "",
    payment_note: "",
    payment_method: "",
    promotion_id: "",
    total_money: "",
  });

  useEffect(async () => {
    const cart_id = await getCart(user?.customer_id);
    const listCart = await getProductCart(cart_id[0][0]?.cart_id);
    const list = await getAllPromotions();

    setListPromotions(list);
    setCart(listCart);
  }, [state]);

  const handleConfirm = async () => {
    setConfirmOrder(true);
    const y = await insertOrder(user?.customer_id);
    console.log(y);
    setOrder_id(y);
    window.localStorage.setItem("order_id", JSON.stringify(y));
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Th??nh c??ng!");
    }, 5000);
    setSender((state) => {
      return {
        ...state,
        order_id: y.order_id,
        customer_id: user.customer_id,
      };
    });

    const x = await insertProductOrder(y, cart);
    let current = 0;
    let timerId = setInterval(async function () {
      if (current == 10) {
        clearInterval(timerId);
      }
      const temp = await getTotalMoneyOrder(y);
      setTotalOrder(temp);
      setSender((state) => {
        return {
          ...state,
          total_money: totalOrder - giamGia,
        };
      });
      current++;
    }, 500);
    window.localStorage.setItem("confirm", "true");
  };
  useEffect(async () => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {loading && (
        <div style={{ height: "70%" }} className="overlay__loading">
          <DotLoader
            color={"#ffffff"}
            loading={loading}
            css={override}
            size={150}
          />
        </div>
      )}
      <div className="wrapper">
        <div className="info">
          <div className="">
            <h2 className="info_title">Th??ng tin v???n chuy???n</h2>
            <div className="info_input">
              <div className="info_input-name_phone">
                <div className="info_input-name">
                  <input
                    type=""
                    id=""
                    placeholder="H??? T??n"
                    onBlur={(e) => {
                      setSender((state) => {
                        return { ...state, name: e.target.value };
                      });
                    }}
                  />
                </div>
                <div className="info_input-name">
                  <input
                    type=""
                    id=""
                    placeholder="S??? ??i???n tho???i"
                    onBlur={(e) => {
                      setSender((state) => {
                        return { ...state, phoneNumber: e.target.value };
                      });
                    }}
                  />
                </div>
              </div>
              <div className="info_input-name_phone wrap">
                <div className="info_input-name">
                  <input
                    type=""
                    id=""
                    placeholder="Email"
                    onBlur={(e) => {
                      setSender((state) => {
                        return { ...state, email: e.target.value };
                      });
                    }}
                  />
                </div>
                <div className="info_input-name">
                  <input
                    type=""
                    id=""
                    placeholder="?????a ch??? (v?? d???: ??HQG ??H B??CH KHOA TPHCM QU???N 10)"
                    onBlur={(e) => {
                      setSender((state) => {
                        return { ...state, address: e.target.value };
                      });
                    }}
                  />
                </div>
              </div>
              <div className="info_input-name_phone wrap">
                <div className="info_input-name">
                  <input
                    type=""
                    id=""
                    placeholder="Ghi ch?? th??m (v?? d???: Giao gi??? h??nh ch??nh)"
                    onBlur={(e) => {
                      setSender((state) => {
                        return { ...state, payment_note: e.target.value };
                      });
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div class="title"> H??nh th???c thanh to??n</div>
            <div className="">
              <form data-v-7edd1815="">
                <label
                  data-v-7edd1815=""
                  for="payment-COD"
                  class={`${
                    active[0] == 1 ? "active" : ""
                  } payment-method__item`}
                  onClick={() => {
                    setActive(() => [1, 0, 0, 0, 0, 0]);
                    setSender((state) => {
                      return {
                        ...state,
                        payment_method: "COD",
                      };
                    });
                  }}
                >
                  <span
                    data-v-7edd1815=""
                    class="payment-method__item-custom-checkbox custom-radio"
                  >
                    <input
                      data-v-7edd1815=""
                      type="radio"
                      id="payment-COD"
                      name="payment-method"
                      autocomplete="off"
                      value="COD"
                      className="hidden"
                    />
                    <span data-v-7edd1815="" class="checkmark"></span>
                  </span>
                  <span
                    data-v-7edd1815=""
                    class="payment-method__item-icon-wrapper"
                  >
                    <img
                      data-v-7edd1815=""
                      src="https://www.coolmate.me/images/COD.svg"
                      alt="COD <br/>Thanh to??n khi nh???n h??ng"
                    />
                  </span>
                  <span
                    data-v-7edd1815=""
                    class="payment-method__item-name"
                    style={{ color: "black" }}
                  >
                    COD <br />
                    Thanh to??n khi nh???n h??ng
                  </span>
                </label>
                <label
                  data-v-7edd1815=""
                  for="payment-momo"
                  class={`${
                    active[1] == 1 ? "active" : ""
                  } payment-method__item`}
                  onClick={() => {
                    setActive(() => [0, 1, 0, 0, 0, 0]);
                    setSender((state) => {
                      return {
                        ...state,
                        payment_method: "MOMO",
                      };
                    });
                  }}
                >
                  <span
                    data-v-7edd1815=""
                    class="payment-method__item-custom-checkbox custom-radio"
                  >
                    <input
                      data-v-7edd1815=""
                      type="radio"
                      id="payment-momo"
                      name="payment-method"
                      autocomplete="off"
                      value="momo"
                      className="hidden"
                    />{" "}
                    <span data-v-7edd1815="" class="checkmark"></span>
                  </span>{" "}
                  <span
                    data-v-7edd1815=""
                    class="payment-method__item-icon-wrapper"
                  >
                    <img
                      data-v-7edd1815=""
                      src="https://www.coolmate.me/images/momo-icon.png"
                      alt="Thanh To??n MoMo"
                    />
                  </span>{" "}
                  <span data-v-7edd1815="" class="payment-method__item-name">
                    Thanh To??n MoMo
                  </span>
                </label>
                <label
                  data-v-7edd1815=""
                  for="payment-zalopay"
                  class={`${
                    active[2] == 1 ? "active" : ""
                  } payment-method__item`}
                  onClick={() => {
                    setActive((state) => [0, 0, 1, 0, 0, 0]);
                    setSender((state) => {
                      return {
                        ...state,
                        payment_method: "ZALOPAY",
                      };
                    });
                  }}
                >
                  <span
                    data-v-7edd1815=""
                    class="payment-method__item-custom-checkbox custom-radio"
                  >
                    <input
                      data-v-7edd1815=""
                      type="radio"
                      id="payment-zalopay"
                      name="payment-method"
                      autocomplete="off"
                      value="zalopay"
                      className="hidden"
                    />
                    <span data-v-7edd1815="" class="checkmark"></span>
                  </span>{" "}
                  <span
                    data-v-7edd1815=""
                    class="payment-method__item-icon-wrapper"
                  >
                    <img
                      data-v-7edd1815=""
                      src="https://www.coolmate.me/images/logo-zalopay.svg"
                      alt="V?? ??i???n t??? ZaloPay"
                    />
                  </span>{" "}
                  <span data-v-7edd1815="" class="payment-method__item-name">
                    V?? ??i???n t??? ZaloPay
                  </span>
                </label>
                <label
                  data-v-7edd1815=""
                  for="payment-shopeepay"
                  class={`${
                    active[3] == 1 ? "active" : ""
                  } payment-method__item`}
                  onClick={() => {
                    setActive(() => [0, 0, 0, 1, 0, 0]);
                    setSender((state) => {
                      return {
                        ...state,
                        payment_method: "SHOPEEPAY",
                      };
                    });
                  }}
                >
                  <span
                    data-v-7edd1815=""
                    class="payment-method__item-custom-checkbox custom-radio"
                  >
                    <input
                      data-v-7edd1815=""
                      type="radio"
                      id="payment-shopeepay"
                      name="payment-method"
                      autocomplete="off"
                      value="shopeepay"
                      className="hidden"
                    />
                    <span data-v-7edd1815="" class="checkmark"></span>
                  </span>{" "}
                  <span
                    data-v-7edd1815=""
                    class="payment-method__item-icon-wrapper"
                  >
                    <img
                      data-v-7edd1815=""
                      src="https://mcdn.coolmate.me/image/September2021/195dbf69c0ac36f26fbd_(1).png"
                      alt="V?? ShopeePay <br/><i>Gi???m th??m 50k cho kh??ch h??ng l???n ?????u m??? v?? v?? thanh to??n b???ng ShopeePay</i>"
                    />
                  </span>{" "}
                  <span data-v-7edd1815="" class="payment-method__item-name">
                    V?? ShopeePay <br />
                    <i>
                      Gi???m th??m 50k cho kh??ch h??ng l???n ?????u m??? v?? v?? thanh to??n
                      b???ng ShopeePay
                    </i>
                  </span>
                </label>
                <label
                  data-v-7edd1815=""
                  for="payment-vnpay"
                  class={`${
                    active[4] == 1 ? "active" : ""
                  } payment-method__item`}
                  onClick={() => setActive((state) => [0, 0, 0, 0, 1, 0])}
                >
                  <span
                    data-v-7edd1815=""
                    class="payment-method__item-custom-checkbox custom-radio"
                  >
                    <input
                      data-v-7edd1815=""
                      type="radio"
                      id="payment-vnpay"
                      name="payment-method"
                      autocomplete="off"
                      value="vnpay"
                      className="hidden"
                      onBlur={(e) => {
                        setSender((state) => {
                          return {
                            ...state,
                            payment_method: "9PAY",
                          };
                        });
                      }}
                    />{" "}
                    <span data-v-7edd1815="" class="checkmark"></span>
                  </span>{" "}
                  <span
                    data-v-7edd1815=""
                    class="payment-method__item-icon-wrapper"
                  >
                    <img
                      data-v-7edd1815=""
                      src="https://www.coolmate.me/images/vnpay.png"
                      alt="Th??? ATM / Internet Banking<br/>Th??? t??n d???ng (Credit card) / Th??? ghi n??? (Debit card)<br/>VNPay QR"
                    />
                  </span>{" "}
                  <span data-v-7edd1815="" class="payment-method__item-name">
                    Th??? ATM / Internet Banking
                    <br />
                    Th??? t??n d???ng (Credit card) / Th??? ghi n??? (Debit card)
                    <br />
                    VNPay QR
                  </span>
                </label>
                <label
                  data-v-7edd1815=""
                  for="payment-9pay"
                  class={`${
                    active[5] == 1 ? "active" : ""
                  } payment-method__item`}
                  onClick={() => setActive((state) => [0, 0, 0, 0, 0, 1])}
                >
                  <span
                    data-v-7edd1815=""
                    class="payment-method__item-custom-checkbox custom-radio"
                  >
                    <input
                      data-v-7edd1815=""
                      type="radio"
                      id="payment-9pay"
                      name="payment-method"
                      autocomplete="off"
                      value="9pay"
                      className="hidden"
                    />{" "}
                    <span data-v-7edd1815="" class="checkmark"></span>
                  </span>{" "}
                  <span
                    data-v-7edd1815=""
                    class="payment-method__item-icon-wrapper"
                  >
                    <img
                      data-v-7edd1815=""
                      src="https://mcdn.coolmate.me/uploads/May2022/9pay.svg"
                      alt="V?? ??i???n t??? 9Pay"
                    />
                  </span>{" "}
                  <span data-v-7edd1815="" class="payment-method__item-name">
                    V?? ??i???n t??? 9Pay
                  </span>
                </label>
              </form>
            </div>
            <p class="cart-return-text">
              N???u b???n kh??ng h??i l??ng v???i s???n ph???m c???a ch??ng t??i? B???n ho??n to??n
              c?? th??? tr??? l???i s???n ph???m. T??m hi???u th??m{" "}
              <a href="/page/chinh-sach-doi-tra" target="_blank">
                <b>t???i ????y</b>
              </a>
              .
            </p>
            {!confirmOrder ? (
              ""
            ) : (
              <div
                class="cart-section"
                onClick={() => {
                  window.localStorage.removeItem("order_id", "confirm");
                  payment(sender);
                }}
              >
                <button class="checkout-btn mb">Thanh to??n</button>
              </div>
            )}
          </div>
        </div>
        <div className="grid__columnn five-twelfths mobile--one-whole">
          <div className="cart-section">
            <h2 className="">Gi??? h??ng</h2>
            <div>
              {cart?.map((cartItem, index) => (
                <CardDetail
                  key={index}
                  props={cartItem}
                  setState={setState}
                  confirmOrder={confirmOrder}
                />
              ))}
            </div>
            {!confirmOrder ? (
              <>
                <p class="cart-return-text">
                  B???n c???n ti???n h??nh ?????t ????n th??nh c??ng ????? thanh to??n s???n ph???m.
                  T??m hi???u th??m{" "}
                  <a href="/page/chinh-sach-doi-tra" target="_blank">
                    <b>t???i ????y</b>
                  </a>
                  .
                </p>
                <button
                  className="btn mb "
                  style={{
                    margin: "20px 20px",
                    padding: "10px 0px",
                    width: "100%",
                  }}
                  onClick={handleConfirm}
                >
                  X??c nh???n
                </button>
                <div style={{ height: "20px" }}></div>
              </>
            ) : (
              <>
                <div data-v-e422017c="" class="discount-block">
                  {" "}
                  <div data-v-e422017c="" class="coupon-public">
                    <div data-v-e422017c="" class="coupons">
                      {listPromotions?.map((promotion, index) => {
                        return (
                          <div
                            data-v-e422017c=""
                            key={index}
                            className={`coupon ${
                              index == indexActive ? "active" : ""
                            }`}
                            onClick={() => {
                              if (
                                Number(totalOrder) < Number(promotion.min_money)
                              )
                                alert(
                                  `????n h??ng ph???i t???i thi???u ${promotion.min_money.toLocaleString()} vn?? ????? ??p d???ng khuy???n m??i`
                                );
                              else {
                                setGiamGia((state) => {
                                  return {
                                    ...state,
                                    percent: promotion.promotion_percent / 100,
                                    max: promotion.max_money,
                                    min: promotion.min_money,
                                    start_date: promotion._start_date,
                                    end_date: promotion._end_date,
                                  };
                                });
                                setIndexActive(index);
                              }
                              setSender((state) => {
                                return {
                                  ...state,
                                  promotion_id: promotion.promotion_id,
                                };
                              });
                            }}
                          >
                            <div data-v-e422017c="" class="coupon-left"></div>{" "}
                            <div data-v-e422017c="" class="coupon-right">
                              <div data-v-e422017c="" class="coupon-title">
                                {promotion.promotion_name || "x"}
                                <span data-v-e422017c="" class="coupon-count">
                                  <i data-v-e422017c="">
                                    (c??n l???i {promotion?.amount})
                                  </i>
                                </span>
                              </div>{" "}
                              <div
                                data-v-e422017c=""
                                class="coupon-description"
                              >
                                Gi???m{" "}
                                <b
                                  style={{ color: "black", fontWeight: "bold" }}
                                >
                                  {" "}
                                  {promotion?.promotion_percent || "xxx"}%{" "}
                                </b>
                                gi?? tr??? ????n h??ng t???i thi???u{" "}
                                <b
                                  style={{ color: "black", fontWeight: "bold" }}
                                >
                                  {promotion?.min_money.toLocaleString() ||
                                    "xxx"}
                                </b>{" "}
                                ,Gi???m t???i ??a{" "}
                                <b
                                  style={{ color: "black", fontWeight: "bold" }}
                                >
                                  {" "}
                                  {promotion?.max_money.toLocaleString() ||
                                    "XXX"}{" "}
                                </b>
                                (kh??ng ??p d???ng c??ng ch????ng tr??nh ??u ????i kh??c)
                              </div>
                              <div
                                data-v-e422017c=""
                                class="coupon-description"
                              >
                                ??i???u ki???n: {promotion?.condition || "xxxx"}{" "}
                                <br />
                                Qu?? t???ng: {promotion?.gift_product ||
                                  "xxx"}{" "}
                                <br />
                                ??p d???ng t???:{" "}
                                {promotion?._start_date.slice(0, 10) ||
                                  "01-11-2022"}{" "}
                                <br />
                                Cho ?????n:{" "}
                                {promotion?.end_date.slice(0, 10) ||
                                  "01-11-2022"}{" "}
                                <br />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>{" "}
                </div>
                <div data-v-5598cbab="" class="divider"></div>
                <div data-v-e58f269a="" class="pricing-info">
                  <div data-v-e58f269a="" class="pricing-info__item">
                    <p
                      data-v-e58f269a=""
                      onClick={async () => {
                        console.log(1);
                        const temp = await getTotalMoneyOrder(order_id);
                        setTotalOrder(temp);
                      }}
                    >
                      T???m t??nh
                    </p>{" "}
                    <p data-v-e58f269a="" class="pricing-info__sub">
                      <span data-v-e58f269a="">
                        {totalOrder?.toLocaleString()} vn??
                      </span>{" "}
                      <span
                        data-v-e58f269a=""
                        class="pricing-info__saving"
                      ></span>
                    </p>
                  </div>{" "}
                  <div data-v-e58f269a="" class="pricing-info__item">
                    <p data-v-e58f269a="">Gi???m gi??</p>{" "}
                    <p data-v-e58f269a="" class="">
                      <span data-v-e58f269a="">
                        {Number(giamGia.percent) * Number(totalOrder) >
                        giamGia.max
                          ? Number(giamGia.max).toLocaleString()
                          : (Number(giamGia.percent) * Number(totalOrder)).toLocaleString()}{" "}
                        vn??
                      </span>{" "}
                    </p>
                  </div>{" "}
                  <div data-v-e58f269a="" class="pricing-info__item">
                    <p data-v-e58f269a="">Ph?? giao h??ng</p>{" "}
                    <p data-v-e58f269a="" class="">
                      <span data-v-e58f269a="">Mi???n ph??</span>
                    </p>
                  </div>{" "}
                  <div
                    data-v-5598cbab=""
                    data-v-e58f269a=""
                    class="divider"
                  ></div>{" "}
                  <div
                    data-v-e58f269a=""
                    class="pricing-info__item pricing-info__total"
                  >
                    <p data-v-e58f269a="">T???ng</p>{" "}
                    <p data-v-e58f269a="" class="">
                      <span data-v-e58f269a="">
                        {
                        Number(giamGia.percent) * Number(totalOrder) >giamGia.max?(totalOrder-giamGia.max):
                        ((totalOrder -  (Number(giamGia.percent) * Number(totalOrder))).toLocaleString())} vn??
                      </span>{" "}
                      <span
                        data-v-e58f269a=""
                        style={{
                          color: "red",
                          display: "block",
                          fontSize: "12px",
                        }}
                      >
                        (???? gi???m {(giamGia.percent) * 100}% tr??n gi?? g???c)
                      </span>
                    </p>
                  </div>
                  <button
                    className="btn mb"
                    style={{
                      margin: "20px 20px",
                      padding: "10px 0px",
                      marginBottom: "20px !important",
                      width: "100%",
                    }}
                    onClick={() => {
                      console.log(order_id);
                      setConfirmOrder((prev) => !prev);
                      deleteOrderProduct(order_id.order_id, cart);
                      window.localStorage.removeItem("confirm");
                    }}
                  >
                    H???y
                  </button>
                  <div
                    className=""
                    style={{
                      margin: "20px 20px",
                      padding: "10px 0px",
                      height: "20px",
                    }}
                  ></div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
