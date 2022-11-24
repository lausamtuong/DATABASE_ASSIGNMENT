import React from "react";
import "./itemcard.scss";
import { FaMotorcycle } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";
import { Link } from "react-router-dom";
const Itemcard = ({props}) => {
  var price =props[0]?.price.split(' ')[0].replaceAll('.','')
  var prices = Math.round(Number(price))
  var total= (Math.round(prices * 100) / 100).toLocaleString().replaceAll(',','.')
  const cost =  Number(total.split(" ")[0].replaceAll(".", ""))*0.9;
  return (
    <div className="Item_card">
      <div className="Item_header">
        <div className="Item_header-type">
          <p>{props[0]?.type}</p>
        </div>
        <div className="Item_header-status">
          <div className="green">
            <FaMotorcycle />
            <span>Giao hàng thành công</span>
          </div>
          <div className="red">
            <BsCheck2Circle />
            <span>ĐÃ THANH TOÁN</span>
          </div>
        </div>
      </div>
      <div className="Item_body">
        <div className="Item_body-top">
          <div className="Item_body-img">
            <img
              alt="img"
              src={props[0]?.src}
            />
          </div>
          <div className="Item_body-des">
            <p className='name-item'>{props[0]?.name}</p>
            <span>
            {props[0]?.slogan}
            </span>
          </div>
          <div className="Item_body-price">
              <p>{props[0]?.price}</p>
              <p>
              <span>Discount:</span>10%
              </p>
            
          </div>
        </div>
      </div>
        <div className="Item_footer">
          <div className="Item_footer-total">
          Tổng:   
          <span>  {cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} vnđ</span>
         </div>
          <div className="Item_footer-btn">
          <Link to={`/product/payment/${props[0].params}`}>Xem xe</Link></div>
        </div>
    </div>
  );
};

export default Itemcard;
