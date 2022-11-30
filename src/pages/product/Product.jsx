import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProductList from "../../components/product-list/ProductList";
import "./product.scss";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import {
  filterProduct,
  getAllProduct,
  search,
} from "../../reduxToolkit/apiRequest";
import MenuItem from "@mui/material/MenuItem";
import { Input } from "@nextui-org/react";
import Select from "@mui/material/Select";

const Product = () => {
  const fuel = useSelector((state) => state.auth.fuel);
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState([]);
  const banner = useSelector((state) => state?.auth?.API?.BANNER);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    setLoading(true);
    const temp = await getAllProduct();
    setList(temp);
    setLoading(false);
  }, []);
  window.scrollTo(0, 0);
  const inputHandler = async (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
    const temp = await search(lowerCase);
    setList(temp);
  };

  var type_;
  const checkHandle = async (e) => {
    type_ = e.target.getAttribute("id") + "";
    const temp = await filterProduct(type_);
    setList(temp);
  };
  return (
    <>
      <div className="product" style={{ overflow: "hidden" }}>
        <div className="product__banner">
          <div class="site-collections-filter">
            <div class="site-collections-filter__items ">
              <span>
                <img
                  src="https://mcdn.coolmate.me/image/October2022/mceclip2_22.png"
                  onClick={checkHandle}
                  id="CAT0005 "
                  alt=""
                  type="SHIRT"
                />
              </span>
            </div>
            <div class="site-collections-filter__items ">
              <span>
                <img
                  src="https://mcdn.coolmate.me/image/July2022/mceclip0_35.png"
                  alt=""
                  onClick={checkHandle}
                  id="CAT0001"
                  type="SHIRT"
                />
              </span>
            </div>
            <div class="site-collections-filter__items ">
              <span>
                <img
                  src="https://mcdn.coolmate.me/image/July2022/mceclip1_79.png"
                  alt=""
                  onClick={checkHandle}
                  id="CAT0004"
                  type="SHIRT"
                />
              </span>
            </div>
            <div class="site-collections-filter__items ">
              <span>
                <img
                  src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F12%2Fnike-dunk-low-viotech-closer-look-release-information-CT5050-500-00.jpg?w=960&cbr=1&q=90&fit=max"
                  alt=""
                  onClick={checkHandle}
                  id="CAT0002 "
                  type="SHOSE"
                />
              </span>
            </div>
            <div class="site-collections-filter__items ">
              <span>
                <img
                  src="https://mcdn.coolmate.me/image/July2022/mceclip4_40.png"
                  alt=""
                  onClick={checkHandle}
                  id="CAT0006 "
                  type="TROUSER"
                />
              </span>
            </div>
            <div class="site-collections-filter__items ">
              <span>
                <img
                  src="https://mcdn.coolmate.me/image/July2022/mceclip2_97.png"
                  alt=""
                  onClick={checkHandle}
                  id="CAT0003"
                  type="TROUSER"
                />
              </span>
            </div>
          </div>
        </div>
        <div class="collections-filter">
          <div class="containerr container--full">
            <div class="collections-filter__wrapper">
              <div class="collections-filter__inner">
                <h2 class="collections-filter__heading">Sản phẩm</h2>
              </div>{" "}
              <Input placeholder="Search" onChange={inputHandler} />
            </div>
          </div>
        </div>
        <div className="product__title">sản phẩm bán chạy</div>
        <div className="product__main">
          {loading ? (
            <div style={{display:"flex",justifyContent:"center"}}>
              <div id="wifi-loader">
                <svg class="circle-outer" viewBox="0 0 86 86">
                  <circle class="back" cx="43" cy="43" r="40"></circle>
                  <circle class="front" cx="43" cy="43" r="40"></circle>
                  <circle class="new" cx="43" cy="43" r="40"></circle>
                </svg>
                <svg class="circle-middle" viewBox="0 0 60 60">
                  <circle class="back" cx="30" cy="30" r="27"></circle>
                  <circle class="front" cx="30" cy="30" r="27"></circle>
                </svg>
                <svg class="circle-inner" viewBox="0 0 34 34">
                  <circle class="back" cx="17" cy="17" r="14"></circle>
                  <circle class="front" cx="17" cy="17" r="14"></circle>
                </svg>
                <div class="text" data-text="Loading"></div>
              </div>
            </div>
          ) : (
            <div className="product__list">
              <ProductList list={list} fuel={fuel} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
