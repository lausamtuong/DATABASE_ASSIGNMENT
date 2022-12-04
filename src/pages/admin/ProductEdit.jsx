import { Avatar, Button, Input } from "@nextui-org/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardWrapper from "../../components/dashboard-wrapper/DashboardWrapper";
import "./useredit.scss";
import avt from "../../images/member1.jpg";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useDispatch } from "react-redux";
import { SiZcash } from "react-icons/si";
import { BiMoney, BiCategoryAlt } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { FaProductHunt } from "react-icons/fa";
import { addProductChild, updateProduct } from "../../reduxToolkit/apiRequest";
const ProductEditDetail = ({ product }) => {
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
  const [type, setType] = useState("");
  const [data, setData] = useState({
    product_id:product?.product_id,
    product_name: product?.product_name,
    manufacturer: product?.manufacturer,
    illustration: product?.illustration,
    entry_price: product?.entry_price,
    sell_price: product?.sell_price,
    category_id: product?.category_id,
    supplier_id: product?.supplier_id,
  });
  const [addData, setAddData] = useState({
    product_id: product?.product_id,
    color: "",
    size: "",
    shoe_type: "",
    style: "",
    amount: "",
    shoe_elastic: "",
    clothes_elastic: "",
    type: "CLOTHES",
  });
  const [selectedImage, setSelectedImage] = useState();
  const handleType = (e) => {
    setType(e.target.value);
    setAddData((state) => {
      return { ...state, type: e.target.value };
    });
  };
  const removeSelectedImage = () => {
    setSelectedImage();
  };
  const saveFile = async(e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
    setFile(e.target.files[0]);
    
    setFileName(e.target.files[0].name);
  };
  const convertBase64 = (file) => {
    return new Promise((res, rej) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        res(fileReader.result);
      };
      fileReader.onerror = (err) => {
        rej(err);
      };
    });
  };
  const sendData = async () => {
    if(file){
      const base64 = await convertBase64(file);
      const newData = {...data,illustration:base64}
      updateProduct(newData,navigate)
    }
    else updateProduct(data,navigate)
  };
  const sendAddData = async () => {
    addProductChild(addData);
  };
  return (
    <DashboardWrapper>
      {/* <DashboardWrapperRight> */}
      <div className="">
        <div className="userEdit__header">
          <div className="title mb">Edit Product</div>
          <Button size="lg" shadow auto onClick={sendData}>
            Save
          </Button>
        </div>
        <div className="userEdit__container">
          <div className="userShow">
            <div className="userShowTitle">
              <Avatar
                src={product?.illustration == "" ? avt : product?.illustration}
                zoomed
                bordered
                size="xl"
                color="success"
              />
              <div className="userShowTopTitle">
                <p className="name">{product?.product_id || "PRODUCT ID"}</p>
                <span className="email">
                  {product?.product_name || "PRODUCT NAME"}
                </span>
              </div>
            </div>
            <div className="userShowLabel">Product Detail</div>
            <div className="userShowIcon">
              <FaProductHunt />
              <span>
                Hãng sản xuất:<b>{product?.manufacturer || "HANG SAN XUAT"}</b>
              </span>
            </div>
            <div className="userShowIcon">
              <AiOutlineHome />
              <span>
                Mã nhà cung cấp:{" "}
                <b>{product?.supplier_id || "MA NHA CUNG CAP"}</b>
              </span>
            </div>
            <div className="userShowIcon">
              <BiCategoryAlt />
              <span>
                Mã danh mục: <b>{product?.category_id || "MA DANH MUC"}</b>
              </span>
            </div>
            <div className="userShowIcon">
              <BiMoney />
              <span>
                Giá Nhập: <b>{product?.entry_price || "GIA NHAP"}</b>
              </span>
            </div>
            <div className="userShowIcon">
              <SiZcash />
              <span>
                Giá bán: <b>{product?.sell_price || "GIA BAN"}</b>
              </span>
            </div>
          </div>
          <div className="userUpdate">
            <div className="userUpdateTitle">Edit</div>
            <form action="submit" className="userUpdateForm">
              <div className="textUpdate">
                <Input
                  size="md"
                  underlined
                  labelPlaceholder="Tên Sản Phẩm"
                  color="success"
                  onChange={(e) => {
                    setData((state) => {
                      return {
                        ...state,
                        product_name: e.target.value,
                      };
                    });
                  }}
                />
                <Input
                  size="md"
                  underlined
                  labelPlaceholder="Hãng Sản Xuất"
                  color="success"
                  onChange={(e) => {
                    setData((state) => {
                      return {
                        ...state,
                        manufacturer: e.target.value,
                      };
                    });
                  }}
                />
                {/* <Input
                  size="md"
                  underlined
                  labelPlaceholder="Mã Nhà Cung Cấp"
                  color="success"
                  onChange={(e) => {
                    setData((state) => {
                      return {
                        ...state,
                        supplier_id: e.target.value,
                      };
                    });
                  }}
                /> */}
                <label for="supplier_id" style={{ fontSize: "14px" }}>
                  Nhà Cung cấp
                </label>

                <select
                  id="supplier_id"
                  name="supplier_id"
                  onChange={(e) => {
                    setData((state) => {
                      return {
                        ...state,
                        supplier_id: e.target.value,
                      };
                    });
                  }}
                >
                  <option value="SUP0001  ">OUTERITY</option>
                  <option value="SUP0002  ">CANIFA</option>
                  <option value="SUP0003  ">DONY</option>
                  <option value="SUP0004  ">COOL MATE</option>
                  <option value="SUP0005  ">GUCCI</option>
                </select>
                <label for="category_id" style={{ fontSize: "14px" }}>
                  Mã giỏ hàng
                </label>

                <select id="category_id" name="category_id"
                 onChange={(e) => {
                  setData((state) => {
                    return {
                      ...state,
                      category_id: e.target.value,
                    };
                  });
                }}
                >
                  <option value="CAT0001    ">TANKTOP</option>
                  <option value="CAT0002    ">SHOE</option>
                  <option value="CAT0003    ">PANT</option>
                  <option value="CAT0004    ">POLO</option>
                  <option value="CAT0005    ">WINTER</option>
                  <option value="CAT0006    ">SHORT</option>
                </select>
                <Input
                  size="md"
                  underlined
                  labelPlaceholder="Giá Nhập"
                  color="success"
                  type="number"
                  labelRight="VND"
                  onChange={(e) => {
                    setData((state) => {
                      return {
                        ...state,
                        entry_price: e.target.value,
                      };
                    });
                  }}
                />
                <Input
                  size="md"
                  underlined
                  labelPlaceholder="Giá Bán"
                  color="success"
                  labelRight="VND"
                  onChange={(e) => {
                    setData((state) => {
                      return {
                        ...state,
                        sell_price: e.target.value,
                      };
                    });
                  }}
                />
              </div>
              <div className="imgUpdate">
                {selectedImage && (
                  <div className="imageChose">
                    <img src={URL.createObjectURL(selectedImage)} alt="Thumb" />
                    <div className="removeImage" onClick={removeSelectedImage}>
                      <Button shadow auto color="error">
                        Remove this image
                      </Button>
                    </div>
                  </div>
                )}
                {!selectedImage && (
                  <label htmlFor="imageFile" className="inputImage">
                    {/* <Button type="button"> */}
                    <AddPhotoAlternateIcon style={{ color: "#ffffff" }} />
                    <span>Import Your Image</span>
                    <input
                      type="file"
                      accept="image/*"
                      id="imageFile"
                      onChange={(e) => {
                        saveFile(e);
                      }}
                      hidden
                    />
                    {/* </Button> */}
                  </label>
                )}
                <div className="">OR</div>
                <div className="link_image">
                  <Input
                    bordered
                    labelLeft="https://"
                    labelRight=".jpg/png"
                    placeholder=""
                    onChange={(e) => {
                      setData((state) => {
                        return {
                          ...state,
                          illustration: e.target.value,
                        };
                      });
                    }}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="userEdit__header">
          <div className="title mb">ADD Product</div>
          <Button size="lg" shadow auto onClick={sendAddData}>
            ADD
          </Button>
        </div>
        <div className="userEdit__container">
          <div className="userUpdate">
            <div className="userUpdateTitle">INFOMATION</div>
            <form action="submit" className="userUpdateForm">
              <div className="textUpdate">
                <Input
                  size="md"
                  underlined
                  labelPlaceholder="Tính năng"
                  color="success"
                  onChange={(e) => {
                    setAddData((state) => {
                      return {
                        ...state,
                        shoe_elastic: e.target.value,
                        clothes_elastic: e.target.value,
                      };
                    });
                  }}
                />
                <Input
                  size="md"
                  underlined
                  labelPlaceholder="Kích cỡ"
                  color="success"
                  onChange={(e) => {
                    setAddData((state) => {
                      return {
                        ...state,
                        size: e.target.value,
                      };
                    });
                  }}
                />
                <Input
                  size="md"
                  underlined
                  labelPlaceholder="Màu sắc"
                  color="success"
                  onChange={(e) => {
                    setAddData((state) => {
                      return {
                        ...state,
                        color: e.target.value,
                      };
                    });
                  }}
                />
                <Input
                  size="md"
                  underlined
                  labelPlaceholder="Thể loại"
                  color="success"
                  type="text"
                  onChange={(e) => {
                    setAddData((state) => {
                      return {
                        ...state,
                        style: e.target.value,
                        shoe_type: e.target.value,
                      };
                    });
                  }}
                />
                <Input
                  size="md"
                  underlined
                  labelPlaceholder="Số lượng"
                  color="success"
                  type="number"
                  onChange={(e) => {
                    setAddData((state) => {
                      return {
                        ...state,
                        amount: e.target.value,
                      };
                    });
                  }}
                />
                <label for="manufacturer" style={{ fontSize: "14px" }}>
                  Danh mục
                </label>
                <select id="manufacturer" value={type} onChange={handleType}>
                  <option value="CLOTHES">CLOTHES</option>
                  <option value="SHOE">SHOE</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default ProductEditDetail;
