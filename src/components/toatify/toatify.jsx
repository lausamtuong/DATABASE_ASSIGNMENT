import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.scss";
const Toatify = ({item}) => {
  const navigate = useNavigate()
  return (
    <div class="notify">
    
      <div class="notify__wrapper">
        <div class="notify__content">
          <h4 class="notify__message">Đã thêm vào giỏ hàng!</h4>
          <div class="notify__product">
            <div class="notify-product">
              <div class="notify-product__thumbnail">
                <img
                className="notify-product__img"
                  src={item.illustration}
                  alt="illustration"
                />
              </div>
              <div class="notify-product__content">
                <span class="notify-product__title">
                  {item.product_name}
                </span>
                <span class="notify-product__option"></span>
                <span class="notify-product__prices">
                  <del>{item?.discount}</del>
                  <ins>{item?.price}</ins>
                </span>
              </div>
            </div>
          </div>
          
          <Link
            to="./payment"
            className=" btn--small marginBottom"
           
            onClick={() => navigate("./payment")}
          >
            Xem Giỏ Hàng
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Toatify;
