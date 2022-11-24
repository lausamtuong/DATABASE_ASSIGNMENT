import React, { useState } from "react";
import { payment } from "../../reduxToolkit/apiRequest";
import axios from "axios";
const Test = () => {
    const [items,setItems] = useState()
  const getData = async () => {
    const x = await axios
      .post("http://localhost:8080/WEB/BE/index.php", {
        action: "getItem",
        email: "admin123asd@gmail.com",
      })
      .then((res) => {
        return res.data;
      });
    return x ;
  };
  const promise= getData()
  promise.then((res)=>{
    setItems(res[0].item)
  })
 

console.log(items.split(','))


  const handle = () => {
    payment({
      action: "payment",
      email: "admin123asd@gmail.com",
      item: items + "tuong,",
    });
  };
  return (
    <div style={{ margin: "200px" }}>
      <button type="text" onClick={handle}>
        thanh toan
      </button>
    </div>
  );
};

export default Test;
