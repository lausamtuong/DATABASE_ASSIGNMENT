import React from "react";
import "./style.css";
import {useNavigate} from 'react-router-dom'

const Card = ({ title, name, gif, type, price, img, params }) => {
  const navigate = useNavigate()
  return (
    <div className="Card-wrapper">
      <div className="Card_img">
        <img src={img} alt="imageCar" className='img-orgin'/>
        <img src={gif} alt="imageCar" className='img-360'/>
      </div>
      <div className="Card_title">
          <p>{title}</p>
      </div>
      <div className="Card_name">
      <p>{name}</p>
      </div>
      <div className="Card_des">
          <div className='Card_des-type'>
              <p>Dòng xe</p>
              <h4>{type}</h4>
          </div>
          <div className='Card_des-price'>
              <p>Giá niêm yết</p>
              <h4>{price}</h4>
          </div>
      </div>
      <div className="Card_btn">
      <p className="Sp__button" onClick={()=>navigate(`./product/detail/${params}`)}>Xem chi tiết</p>
      </div>
    
    </div>
  );
};

export default Card;
