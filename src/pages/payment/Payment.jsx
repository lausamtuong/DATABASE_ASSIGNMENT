import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./payment.scss";
import CardDetail from "../../components/CartDetail/CardDetail";
import { getCart, getProductCart } from "../../reduxToolkit/apiRequest";

const Payment = () => {
  let data = [];
  const user = useSelector((state) => state.auth.login?.currentUser);
  const [cart, setCart] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState([]);
  const [active, setActive] = useState([0, 0, 0, 0, 0, 0]);
  const [sender, setSender] = useState({
    name: "",
    phoneNumber: "",
    address: "",
    email: "",
    note: "",
    paymentMethod: "",
  });
  const [voucherCODE, setVoucherCode] = useState({
    value: "",
    status: false,
  });
  useEffect(async () => {
    const cart_id = await getCart(user.customer_id);
    const listCart = await getProductCart(cart_id[0][0].cart_id);
    setCart(listCart[0]);
  }, []);
  return (
    <>
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
                        return { ...state, note: e.target.value };
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
                        paymentMethod: "COD",
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
                        paymentMethod: "MOMO",
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
                        paymentMethod: "ZALOPAY",
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
                    setActive((state) => [0, 0, 0, 1, 0, 0]);
                    setSender((state) => {
                      return {
                        ...state,
                        paymentMethod: "SHOPEEPAY",
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
                            paymentMethod: "9PAY",
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
            <div class="cart-section">
              <button class="checkout-btn" onClick={console.log(sender)}>
                Thanh toán <span>7.873k</span> <span>(MoMo)</span>
              </button>
            </div>
          </div>
        </div>
        <div className="grid__column five-twelfths mobile--one-whole">
          <div className="cart-section">
            <h2 className="">Giỏ hàng</h2>
            {cart?.map((cartItem, index) => (
              <CardDetail key={index} props={cartItem} />
            ))}
            <div data-v-e422017c="" class="discount-block">
              {" "}
              <div data-v-e422017c="" class="coupon-public">
                <div data-v-e422017c="" class="coupons">
                  <div data-v-e422017c="" class="coupon active">
                    <div data-v-e422017c="" class="coupon-left"></div>{" "}
                    <div data-v-e422017c="" class="coupon-right">
                      <div data-v-e422017c="" class="coupon-title">
                        CMVOUT10
                        <span data-v-e422017c="" class="coupon-count">
                          <i data-v-e422017c="">(Còn 20)</i>
                        </span>
                      </div>{" "}
                      <div data-v-e422017c="" class="coupon-description">
                        Giảm 10% giá trị đơn hàng tối đa 100k (không áp dụng
                        cùng chương trình ưu đãi khác)
                      </div>
                    </div>
                  </div>
                  <div data-v-e422017c="" class="coupon">
                    <div data-v-e422017c="" class="coupon-left"></div>{" "}
                    <div data-v-e422017c="" class="coupon-right">
                      <div data-v-e422017c="" class="coupon-title">
                        ACTIVE
                        <span data-v-e422017c="" class="coupon-count">
                          <i data-v-e422017c="">(Còn 34)</i>
                        </span>
                      </div>{" "}
                      <div data-v-e422017c="" class="coupon-description">
                        Giảm 50k cho đơn gồm các sản phẩm thể thao từ 300k{" "}
                      </div>
                    </div>
                  </div>
                  <div data-v-e422017c="" class="coupon">
                    <div data-v-e422017c="" class="coupon-left"></div>{" "}
                    <div data-v-e422017c="" class="coupon-right">
                      <div data-v-e422017c="" class="coupon-title">
                        CHAOBAN
                        <span data-v-e422017c="" class="coupon-count">
                          <i data-v-e422017c="">(Còn 2578)</i>
                        </span>
                      </div>{" "}
                      <div data-v-e422017c="" class="coupon-description">
                        Giảm 50% tối đa 100k cho đơn hàng đầu tiên tại Coolmate
                        tính trên giá gốc
                      </div>
                    </div>
                  </div>
                  <div data-v-e422017c="" class="coupon">
                    <div data-v-e422017c="" class="coupon-left"></div>{" "}
                    <div data-v-e422017c="" class="coupon-right">
                      <div data-v-e422017c="" class="coupon-title">
                        UNDERWEAR
                        <span data-v-e422017c="" class="coupon-count">
                          <i data-v-e422017c="">(Còn 90)</i>
                        </span>
                      </div>{" "}
                      <div data-v-e422017c="" class="coupon-description">
                        <span>Giảm 30k</span> cho combo quần lót nam (trừ sản
                        phẩm outlet, ưu đãi đặc biệt)
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div data-v-e422017c="" class="discount-box">
                <input
                  data-v-e422017c=""
                  type="text"
                  value={voucherCODE.value}
                  onChange={(e) => {
                    setVoucherCode((state) => {
                      return { ...state, value: e.target.value };
                    });
                  }}
                  placeholder="Mã giảm giá"
                />{" "}
                <button
                  data-v-e422017c=""
                  onClick={(e) => {
                    
                    setVoucherCode((state) => {
                      return { ...state, status: true };
                    });
                  }}
                >
                  Áp dụng
                </button>
              </div>
              {voucherCODE.status && (
                <>
                  <p data-v-e422017c="" class="discount-message text--green">
                    Mã giảm giá đã được áp dụng
                  </p>{" "}
                  <div data-v-e422017c="" class="discount-actions"
                    onClick={() => {
                      setVoucherCode((state) => {
                        return { value:'', status: false };
                      });
                    }}
                  >
                    {" "}
                    <div data-v-e422017c="" class="remove-discount" >
                      Xoá mã giảm giá <b data-v-e422017c="">{voucherCODE?.value||"COOLMATE"}</b>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div data-v-5598cbab="" class="divider"></div>
            <div data-v-e58f269a="" class="pricing-info">
              <div data-v-e58f269a="" class="pricing-info__item">
                <p data-v-e58f269a="">Tạm tính</p>{" "}
                <p data-v-e58f269a="" class="pricing-info__sub">
                  <span data-v-e58f269a="">947.000đ</span>{" "}
                  <span data-v-e58f269a="" class="pricing-info__saving">
                    <i data-v-e58f269a="">
                      (tiết kiệm{" "}
                      <span data-v-e58f269a="" class="text--primary">
                        250k)
                      </span>
                    </i>
                  </span>
                </p>
              </div>{" "}
              <div data-v-e58f269a="" class="pricing-info__item">
                <p data-v-e58f269a="">Giảm giá</p>{" "}
                <p data-v-e58f269a="" class="">
                  <span data-v-e58f269a="">-94.700đ</span>{" "}
                </p>
              </div>{" "}
              <div data-v-e58f269a="" class="pricing-info__item">
                <p data-v-e58f269a="">Phí giao hàng</p>{" "}
                <p data-v-e58f269a="" class="">
                  <span data-v-e58f269a="">Miễn phí</span>
                </p>
              </div>{" "}
              <div data-v-5598cbab="" data-v-e58f269a="" class="divider"></div>{" "}
              <div
                data-v-e58f269a=""
                class="pricing-info__item pricing-info__total"
              >
                <p data-v-e58f269a="">Tổng</p>{" "}
                <p data-v-e58f269a="" class="">
                  <span data-v-e58f269a="">852.300đ</span>{" "}
                  <span
                    data-v-e58f269a=""
                    style={{ color: "red", display: "block", fontSize: "12px" }}
                  >
                    (Đã giảm 28% trên giá gốc)
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
