import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "./product-list.scss";
import CardProduct from "../CardProduct/CardProduct";

const ProductList = ({list}) => {
  return (
    <>
      <div className="product__grid">
        {list[0]?.map((item,i ) => (
          < >
            <CardProduct key={i} item={item} />

          </>
        ))}
       
      </div>
      
    </>
  );
};

export default ProductList;
