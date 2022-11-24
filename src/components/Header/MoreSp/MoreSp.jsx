import React, { useState } from "react";
import "./style.css";

import { useNavigate, Link } from "react-router-dom";
const Listshort = [
  {
    name: "Quần Short Nam New French Terry V2 (thêu logo)",
    img: "https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/September2022/terry_shorts_xam_dam_1.jpg",
    price: "259.000đ",
    discount:"299.000đ"
  },
  {
    name: "Quần Jeans Clean Denim dáng Slimfit S3",
    img: "https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/August2022/xanh_nhat_s3_1.jpg",
    price: "499.000đ",
    discount:"599.000đ"
  },
  {
    name: "Quần Jogger thể thao co giãn Graphene",
    img: "https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/June2022/graphenee.jpg",
    price: "339.000đ",
    discount:"399.000đ"
  },
  {
    name: "Quần lót nam Trunk Bamboo kháng khuẩn",
    img: "https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/December2021/bammix22.jpg",
    price: "299.000đ ",
  },
  {
    name: "Quần dài Kaki Excool co giãn không thấm nước",
    img: "https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/June2022/kaki-excool-xanh-dam.jpg",
    price: "419.000đ ",
    discount:"499.000đ"
  },
];
const Listshirt=[
  {
    name:"Áo thun nam Cotton Compact Premium chống nhăn" ,
    img: "https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/April2022/1grey_copy.jpg",
    price:"259.000đ" ,
    discount:"269.000đ",
  },
  {
    name:"Outlet - Áo Tank top thể thao nam thoáng khí" ,
    img: "https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/August2022/tanktop_da_troi_1.jpg",
    price:"99.000đ" ,
    discount:"179.000đ",
  },
  {
    name:"Áo Polo nam Pique Cotton USA thấm hút tối đa (kẻ sọc)" ,
    img: "https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/August2022/trangstrike.jpg",
    price:"299.000đ " ,
    discount:"399.000đ ",
  },
  {
    name:"Áo Sơ mi nam Excool Limited ngắn tay chui đầu" ,
    img: "https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/June2022/excoolsomiden_52.jpg",
    price:"229.000đ" ,
    discount:"349.000đ",
  },
  {
    name:"Áo thun thể thao dài tay nam Recycle Active" ,
    img: "https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/October2022/ao-thun-the-thao-dai-tay-recycle-active-den-2.jpg",
    price:"199.000đ" ,
    discount:"299.000đ",
  },
]
const ListShoose = [
  { name:"Nike MC Trainer 2" ,
  img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f155a0a0-e1e6-4f7c-aa04-bd8b2bf5f2f7/mc-trainer-2-training-shoes-WFVXbk.png",
  price:"2,069,000₫" ,
  discount:"2,079,000₫",},
  { name:"Nike Air Max 90 LTR" ,
  img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/42527996-e169-4701-bb9c-103b5c758ffe/air-max-90-ltr-older-shoes-9xnt2B.png",
  price:"2.100.000đ" ,
  discount:"2.390.000đ",},
  { name:"Nike Star Runner 3" ,
  img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/4c41fbe1-e061-4df5-b634-59389410edb4/star-runner-3-older-road-running-shoes-S0BkrH.png",
  price:"1,399,000₫" ,
  discount:"1,599,000₫",},
  { name:"Air Jordan 1 Mid SE" ,
  img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/269b43bc-da50-48ca-908b-587eb7d8aae0/air-jordan-1-mid-se-shoes-Q9j3dR.png",
  price:"3.829.000₫" ,
  discount:"3.899.000₫",},
  { name:"Nike Phantom GT2 Elite FG" ,
  img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/5a73fb69-2237-4f7c-ba0d-1a530583c56b/phantom-gt2-elite-fg-football-boot-wRNH0g.png",
  price:"7.319.000₫" ,
  discount:"7,399,000₫",},
]
const category = [
  { title: "Quần Nam", active: false, id: 1 },
  { title: "Áo Nam", active: false, id: 2 },
  { title: "Giày", active: false, id: 3 },
];
const Moresp = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  return (
    <div className="MoreSp_wrap">
      <div className="Sp__title">
        {category.map((item, index) => (
          <p
            key={index}
            className={`${active == item.id ? `Sp__title-active` : ""}`}
            onClick={() => setActive(item.id)}
          >
            {item.title}
          </p>
        ))}
      </div>
      <div className="Sp__info">
        {active===1? (
          <div className="Sp__flex">
            {Listshort.map((item, index) => (
              <div key={index}>
                <div className="Sp__img">
                  <img src={item.img} alt="" />
                  <div className="Sp__img-name">{item.name}</div>
                  <div className="flex">
                    <div className="Sp__img-price">{item.price}</div>
                    <div className="Sp__img-discountprice">{item.discount}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : active===2?(
          <div className="Sp__flex">
            {Listshirt.map((item, index) => (
              <div key={index}>
                <div className="Sp__img">
                  <img src={item.img} alt="" />
                  <div className="Sp__img-name">{item.name}</div>
                  <div className="flex">
                    <div className="Sp__img-price">{item.price}</div>
                    <div className="Sp__img-discountprice">{item.discount}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ):( <div className="Sp__flex">
        {ListShoose.map((item, index) => (
          <div key={index}>
            <div className="Sp__img">
              <img src={item.img} alt="" />
              <div className="Sp__img-name">{item.name}</div>
              <div className="flex">
                <div className="Sp__img-price">{item.price}</div>
                <div className="Sp__img-discountprice">{item.discount}</div>
              </div>
            </div>
          </div>
        ))}
      </div>)}
        <div className="link__button">
          <Link
            to="./product"
            className="Sp__button"
            onClick={() => navigate("./product")}
          >
            Xem tất cả sản phẩm
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Moresp;
