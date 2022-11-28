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
   let order_id = JSON?.parse(window.localStorage.getItem("order_id"));
  let confirm = JSON?.parse(window.localStorage.getItem("confirm"));
  const [cart, setCart] = useState([]);
  const [state, setState] = useState(false);
  const [listPromotions, setListPromotions] = useState([]);
  const [indexActive, setIndexActive] = useState(null);
  const [active, setActive] = useState([0, 0, 0, 0, 0, 0]);
  const [confirmOrder, setConfirmOrder] = useState(confirm);
  const [giamGia, setGiamGia] = useState(0);
  let [loading, setLoading] = useState(false);
  const [totalOrder, setTotalOrder] = useState("");
  const [sender, setSender] = useState({
    name: "",
    phoneNumber: "",
    address: "",
    email: "",
    customer_id:"",
    order_id:"",
    payment_note: "",
    payment_method: "",
    promotion_id:"",
    total_money:""
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
    if (!order_id) {
      order_id = await insertOrder(user?.customer_id);
      window.localStorage.setItem("order_id", JSON.stringify(order_id));
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Đặt đơn thành công!");
    }, 5000);
    setSender((state) => {
      return { 
        ...state,
         order_id:order_id.order_id,
         customer_id:user.customer_id
       };
    });
    console.log(sender)
    const x = await insertProductOrder(order_id, cart);
    let current = 0;
    let timerId = setInterval(async function () {
      if (current == 10) {
        clearInterval(timerId);
      }
      const temp = await getTotalMoneyOrder(order_id);
      setTotalOrder(temp);
      setSender((state) => {
        return { 
          ...state,
           total_money:totalOrder-giamGia,
         };
      });
      current++;
    }, 500);
    window.localStorage.setItem("confirm", "true");
  };
  useEffect(async () => {
    window.scrollTo(0, 0);
    const temp = await getTotalMoneyOrder(order_id);
    setTotalOrder(temp);
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
            <h2 className="info_title">Thông tin vận chuyển</h2>
            <div className="info_input">
              <div className="info_input-name_phone">
                <div className="info_input-name">
                  <input
                    type=""
                    id=""
                    placeholder="Họ Tên"
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
                    placeholder="Số điện thoại"
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
                    placeholder="Địa chỉ (ví dụ: ĐHQG ĐH BÁCH KHOA TPHCM QUẬN 10)"
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
                    placeholder="Ghi chú thêm (ví dụ: Giao giờ hành chính)"
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
            <div class="title"> Hình thức thanh toán</div>
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
                      alt="COD <br/>Thanh toán khi nhận hàng"
                    />
                  </span>
                  <span
                    data-v-7edd1815=""
                    class="payment-method__item-name"
                    style={{ color: "black" }}
                  >
                    COD <br />
                    Thanh toán khi nhận hàng
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
                      alt="Thanh Toán MoMo"
                    />
                  </span>{" "}
                  <span data-v-7edd1815="" class="payment-method__item-name">
                    Thanh Toán MoMo
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
                      alt="Ví điện tử ZaloPay"
                    />
                  </span>{" "}
                  <span data-v-7edd1815="" class="payment-method__item-name">
                    Ví điện tử ZaloPay
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
                      alt="Ví ShopeePay <br/><i>Giảm thêm 50k cho khách hàng lần đầu mở ví và thanh toán bằng ShopeePay</i>"
                    />
                  </span>{" "}
                  <span data-v-7edd1815="" class="payment-method__item-name">
                    Ví ShopeePay <br />
                    <i>
                      Giảm thêm 50k cho khách hàng lần đầu mở ví và thanh toán
                      bằng ShopeePay
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
                      alt="Thẻ ATM / Internet Banking<br/>Thẻ tín dụng (Credit card) / Thẻ ghi nợ (Debit card)<br/>VNPay QR"
                    />
                  </span>{" "}
                  <span data-v-7edd1815="" class="payment-method__item-name">
                    Thẻ ATM / Internet Banking
                    <br />
                    Thẻ tín dụng (Credit card) / Thẻ ghi nợ (Debit card)
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
                      alt="Ví điện tử 9Pay"
                    />
                  </span>{" "}
                  <span data-v-7edd1815="" class="payment-method__item-name">
                    Ví điện tử 9Pay
                  </span>
                </label>
              </form>
            </div>
            <p class="cart-return-text">
              Nếu bạn không hài lòng với sản phẩm của chúng tôi? Bạn hoàn toàn
              có thể trả lại sản phẩm. Tìm hiểu thêm{" "}
              <a href="/page/chinh-sach-doi-tra" target="_blank">
                <b>tại đây</b>
              </a>
              .
            </p>
            {!confirmOrder ? (
              ""
            ) : (
              <div class="cart-section"  onClick={()=>{
                window.localStorage.removeItem("order_id","confirm")
                payment(sender)}}>
                <button class="checkout-btn">
                  Thanh toán 
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="grid__column five-twelfths mobile--one-whole">
          <div className="cart-section">
            <h2 className="">Giỏ hàng</h2>
            <div>
              {cart?.map((cartItem, index) => (
                <CardDetail key={index} props={cartItem} setState={setState} />
              ))}
            </div>
            {!confirmOrder ? (
              <>
                <p class="cart-return-text">
                  Bạn cần tiến hành đặt đơn thành công để thanh toán sản phẩm.
                  Tìm hiểu thêm{" "}
                  <a href="/page/chinh-sach-doi-tra" target="_blank">
                    <b>tại đây</b>
                  </a>
                  .
                </p>
                <button
                  className="btn"
                  style={{ margin: "20px 20px", padding: "10px 0px" }}
                  onClick={handleConfirm}
                >
                  Xác nhận
                </button>
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
                              
                              setGiamGia(
                                (promotion.promotion_percent * totalOrder) / 100
                              );
                              setIndexActive(index);
                              setSender((state) => {
                                return { 
                                  ...state,
                                  promotion_id:promotion.promotion_id
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
                                    (còn lại {promotion?.amount})
                                  </i>
                                </span>
                              </div>{" "}
                              <div
                                data-v-e422017c=""
                                class="coupon-description"
                              >
                                Giảm{" "}
                                <b
                                  style={{ color: "black", fontWeight: "bold" }}
                                >
                                  {" "}
                                  {promotion?.promotion_percent || "xxx"}%{" "}
                                </b>
                                giá trị đơn hàng tối thiểu{" "}
                                <b
                                  style={{ color: "black", fontWeight: "bold" }}
                                >
                                  {promotion?.min_money || "xxx"}
                                </b>{" "}
                                tối đa{" "}
                                <b
                                  style={{ color: "black", fontWeight: "bold" }}
                                >
                                  {" "}
                                  {promotion?.max_money || "XXX"}{" "}
                                </b>
                                (không áp dụng cùng chương trình ưu đãi khác)
                              </div>
                              <div
                                data-v-e422017c=""
                                class="coupon-description"
                              >
                                Điều kiện: {promotion?.condition || "xxxx"}{" "}
                                <br />
                                Quà tặng: {promotion?.gift_product ||
                                  "xxx"}{" "}
                                <br />
                                Áp dụng từ:{" "}
                                {promotion?._start_date.slice(0, 10) ||
                                  "01-11-2022"}{" "}
                                <br />
                                Cho đến:{" "}
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
                        const temp = await getTotalMoneyOrder(order_id);
                        setTotalOrder(temp);
                      }}
                    >
                      Tạm tính
                    </p>{" "}
                    <p data-v-e58f269a="" class="pricing-info__sub">
                      <span data-v-e58f269a="">
                        {totalOrder?.toLocaleString()} vnđ
                      </span>{" "}
                      <span
                        data-v-e58f269a=""
                        class="pricing-info__saving"
                      ></span>
                    </p>
                  </div>{" "}
                  <div data-v-e58f269a="" class="pricing-info__item">
                    <p data-v-e58f269a="">Giảm giá</p>{" "}
                    <p data-v-e58f269a="" class="">
                      <span data-v-e58f269a="">
                        {giamGia.toLocaleString()} vnđ
                      </span>{" "}
                    </p>
                  </div>{" "}
                  <div data-v-e58f269a="" class="pricing-info__item">
                    <p data-v-e58f269a="">Phí giao hàng</p>{" "}
                    <p data-v-e58f269a="" class="">
                      <span data-v-e58f269a="">Miễn phí</span>
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
                    <p data-v-e58f269a="">Tổng</p>{" "}
                    <p data-v-e58f269a="" class="">
                      <span data-v-e58f269a="">{(totalOrder-giamGia).toLocaleString()} vnđ</span>{" "}
                      <span
                        data-v-e58f269a=""
                        style={{
                          color: "red",
                          display: "block",
                          fontSize: "12px",
                        }}
                      >
                        (Đã giảm {giamGia/totalOrder*100}% trên giá gốc)
                      </span>
                    </p>
                  </div>
                  <button
                    className="btn"
                    style={{
                      margin: "20px 20px",
                      padding: "10px 0px",
                      marginBottom: "20px !important",
                    }}
                    onClick={() => {
                      setConfirmOrder((prev) => !prev);
                      deleteOrderProduct(order_id, cart);
                    }}
                  >
                    Hủy
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
