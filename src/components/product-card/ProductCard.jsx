import React, { useState } from "react";
import Button from "../button/Button";
import "./product-card.scss";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
const currencies = [
  {
    value: "select",
    label: "Loại xe",
  },
  {
    value: "petrol",
    label: "Petrol",
  },
  {
    value: "electric",
    label: "Electric",
  },
  {
    value: "e-bike",
    label: "E-bike",
  },
  {
    value: "bike",
    label: "Bike",
  },
];
const ProductCard = ({ item, list, user, more, setList, api }) => {
  const [currency, setCurrency] = React.useState("select");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const navigate = useNavigate();
  const [hide, setHide] = useState(0);
  const [newPrice, setNewPrice] = useState("");
  const [add, setAdd] = useState({
    name: "",
    price: "",
  });

  return (
    <>
      <div className="card" style={{ display: `${hide ? "none" : "block"}` }}>
        {more ? (
          <>
            <div
              className="card__img"
              style={{ backgroundImage: `url(${item?.src})` }}
            ></div>
            <div className="card__info">
              <div className="card__info__name">{item?.name}</div>
              <div className="card__info__price">{item?.price}</div>
            </div>
          </>
        ) : !user ? (
          <div className="more_">
            <TextField
              id="outlined-select-currency"
              select
              label="Loại xe"
              value={currency}
              onChange={handleChange}
              helperText="Please select your currency"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="standard-basic"
              label="Tên xe"
              variant="standard"
              onBlur={(e) =>
                setAdd((state) => {
                  return { ...state, name: e.target.value };
                })
              }
            />
            <TextField
              id="standard-basic"
              label="Giá xe"
              variant="standard"
              onBlur={(e) =>
                setAdd((state) => {
                  return { ...state, price: e.target.value };
                })
              }
            />

            <AiOutlinePlusCircle
              onClick={() => {
                setAdd({ name: "", price: "" });
                setList((state) => {
                  let src = "";
                  if (currency == "petrol") src = api.ALL[0].src;
                  if (currency == "e-bike") src = api.ALL[13].src;
                  if (currency == "bike") src = api.ALL[10].src;
                  if (currency == "electric") src = api.ALL[6].src;
                  return [
                    ...state,
                    { name: add.name, price: add.price, src: src },
                  ];
                });
              }}
            />
          </div>
        ) : (
          ""
        )}

       
          <div
            className="detail__btn"
            onClick={() => navigate(`./detail/${item?.params}`)}
          >
            <Button
              label={"Xem chi tiết"}
              class="btn__transparent"
              detail={true}
            />
          </div>
      

        {user == "true" ? (
          <>
            <TextField
              id="standard-basic"
              label="Giá mới"
              variant="outlined"
              onBlur={(e) => setNewPrice(e.target.value)}
              sx={{ width: "100%", marginBottom: "20px" }}
            />
            <div
              className="detail__btn"
              onClick={() => {
                let newList = [...list];
                console.log(newList)
                const i = list?.map((items,index) => {
                if(items?.params == item?.params ){
                  if(items?.params != undefined)
                {
                  
                    return index;

                }
                else return ;
                }
                else
                  return 0;
                })               
                const total = i.reduce((accumulator, item) => accumulator + item)     
                let itemx = {...newList[total]};  
                itemx.price = newPrice;
                newList[total] = itemx;    
                setList(newList);
                  }}
            >
              <Button
                label={"Sửa giá sản phẩm"}
                class="btn__transparent"
                detail={true}
              />
            </div>
            <div
              className="detail__btn"
              onClick={() => {
                setHide(!hide);
              }}
            >
              <Button
                label={"Xóa sản phẩm"}
                class="btn__transparent"
                detail={true}
              />
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ProductCard;
