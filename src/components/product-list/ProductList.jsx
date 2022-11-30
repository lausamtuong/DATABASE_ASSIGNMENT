import React, { useEffect, useState } from "react";

import InfiniteScroll from "react-infinite-scroll-component";
import "./product-list.scss";
import CardProduct from "../CardProduct/CardProduct";

const ProductList = ({ list }) => {

  const parentStyle = {
    width: "100%",

    flexWrap: "wrap",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  };
  const [scroll, setScroll] = useState({
    items: Array.from({ length: 10 }),
    hasMore: true,
  });
  const fetchMoreData = () => {
    if (scroll.items.length >= list[0].length) {
      setScroll((state) => {
        return { ...state, hasMore: false };
      });
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      setScroll((state) => {
        return {
          ...state,
          items: scroll.items.concat(Array.from({ length: 10 })),
        };
      });
    }, 500);
  };
  return (
    <>
      <div className="product__grid">
        <InfiniteScroll
          style={parentStyle}
          dataLength={ scroll.items.length}
          next={fetchMoreData}
          hasMore={scroll.hasMore}
          loader={
            <>
              <div style={{ display: "flex", justifyContent: "center" }}>
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
            </>
          }
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {list.length &&
            scroll.items.map((i, index) => (
              <div className="childStyle">
                {index < list[0].length && (
                  <CardProduct key={i} item={list[0][index]} />
                )}
              </div>
            ))}
        </InfiniteScroll>
      </div>
    </>
  );
};

export default ProductList;
