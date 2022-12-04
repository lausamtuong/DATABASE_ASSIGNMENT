import React, { useState, useEffect } from "react";
import "./customer.scss";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Avatar } from "@nextui-org/react";
import { DataGridPro } from "@mui/x-data-grid-pro";
import { GrAddCircle } from "react-icons/gr";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Modal, Input, Grid, Button } from "@nextui-org/react";
import ProductEditDetail from "./ProductEdit";
import axios from "axios";
import { addProduct, deleteUsers } from "../../reduxToolkit/apiRequest";
const Product = () => {
  const [product, setProduct] = useState(null);
  const navigate = useNavigate()
  const [rows, setRows] = useState([]);
  const [state,setState] = useState(false)
  useEffect(() => {
    axios
      .get("http://localhost:8090/admin/product", {
        headers: {
          "Access-Control-Allow-Headers": "Origin, Content-Type, Accept",
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
      })
      .then((res) => {
        setRows(res.data);
      });
  }, []);
  const ProductList = ({ setProduct }) => {
  const [visible, setVisible] = React.useState(false);
  const [valueManufacturer, setValueManufacturer] = React.useState("");
  const handleAddProduct = async (e) => {
      e.preventDefault();
      addProduct({
        product_name:e.target.newProductName.value,
        manufacturer:e.target.newManufacturer.value,
        entry_price:(e.target.newEntryPrice.value),
        sell_price:(e.target.newSellPrice.value),
        supplier_id:(e.target.supplier_id.value),
        category_id:(e.target.newCategory.value),
        illustration:(e.target.newIllustration.value)  
      },navigate)
     
     
    };
    const [valueCategory, setValueCategory] = React.useState("");
    const handleValueCategory = (e) => {
      setValueCategory(e.target.value);
    };
    const handleValueManufacturer = (e) => {
      setValueManufacturer(e.target.value);
    };
    const handler = () => setVisible(true);
    const closeHandler = () => {
      setVisible(false);
    };
    const products_field = [
      // { field: "product_id", headerName: "ID", width: 130 },
      {
        field: "Image",
        headerName: "Ảnh",
        type: "string",
        width: 80,
        renderCell: (params) => {
          return (
            <div className="userItem">
              <Avatar
                src={
                   params.row.illustration||"1" 
                }
              />
            </div>
          );
        },
      },

      {
        field: "name",
        headerName: "Tên Sản Phẩm",
        width: 400,
        renderCell: (params) => {
          return (
            <div className="userItem">
              {/* <Avatar src={params.row.image == "" ? avt : params.row.image} /> */}
              <p className="username">
                {params.row.product_name == ""
                  ? "undefined"
                  : params.row.product_name}
              </p>
            </div>
          );
        },
      },
      {
        field: "Price_export",
        headerName: "Giá bán",
        width: 150,
        sorttable: true,
        type: "number",
        renderCell: (params) => {
          return (
            <div className="userItem">
              {params.row.sell_price?.toLocaleString()
                ? (params.row.sell_price?.toLocaleString()+" đ")
                : ""}
            </div>
          );
        },
      },
      {
        field: "Price_import",
        headerName: "Giá Nhập",

        width: 150,
        type: "number",
        renderCell: (params) => {
          return (
            <div className="userItem">
              {params.row.entry_price?.toLocaleString()
                ? (params.row.entry_price?.toLocaleString()+" đ")
                : ""}
            </div>
          );
        },
      },

      {
        field: "quantity",
        headerName: "Số lượng",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        type: "number",
        width: 120,
        renderCell: (params) => {
          return (
            <div className="userItem">
              {params.row?.amount == null
                ? params.row?.total
                : params.row?.amount}
            </div>
          );
        },
      },
      {
        field: "manufacturer",
        headerName: "Hãng Sản Xuất",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 200,
        renderCell: (params) => {
          return (
            <div className="userItem">
              {params.row.manufacturer == "" ? "0" : params.row.manufacturer}
            </div>
          );
        },
      },
      {
        field: "Supplier",
        headerName: "Nhà Cung Cấp",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 200,
        renderCell: (params) => {
          return (
            <div className="userItem">
              {params.row.supplier_id == "" ? "0" : params.row.supplier_id}
            </div>
          );
        },
      },
      {
        field: "clothes_elastic",
        headerName: "Tính năng",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 200,
        renderCell: (params) => {
          return (
            <div className="userItem">
              {params.row?.clothes_elastic
                ? params.row?.clothes_elastic
                : params.row?.shoe_elastic}
            </div>
          );
        },
      },
      {
        field: "style",
        headerName: "Thể loại",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 200,
        renderCell: (params) => {
          return (
            <div className="userItem">
              {params.row?.style ? params.row.style : params.row.shoe_type}
            </div>
          );
        },
      },
      {
        field: "color",
        headerName: "Màu Sắc",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 200,
        renderCell: (params) => {
          return (
            <div className="userItem">
              {params.row?.color ? params.row.color : ""}
            </div>
          );
        },
      },

      {
        field: "Action",
        headerName: "Chỉnh sửa",
        width: 120,
        renderCell: (params) => {
          return (
            <>
              <Link to={`./edit/${params.row.product_id}`}>
                <button
                  className="userListEdit"
                  onClick={() => {
                    setProduct(params.row);
                  }}
                >
                  Edit
                </button>
              </Link>

              <DeleteOutlineIcon
                className="userListDelete"
                onClick={() => {
                
                   deleteUsers(params.row.product_id);
                   alert(`Xóa thành công ${params.row.product_name}`)
                   setState(state=>!state)
                }}
              />
            </>
          );
        },
      },
      {
        field: "reload",
        headerName: (
          <GrAddCircle
            style={{ cursor: "pointer", fontSize: "14px" }}
            onClick={() => {
              handler();
            }}
          />
        ),
        sortable: false,
        editable: false,
        filter: false,
        width: 70,
      },
    ];
    return (
      <div style={{ height: "80vh", width: "100%" }}>
        <DataGridPro
          treeData
          getTreeDataPath={(row) => {
            if (row?.size)
              return (row?.product_id + "/" + row?.size)?.split("/");
            else return row?.product_id?.split("/");
          }}
          rows={rows}
          columns={products_field}
          getRowId={(row) => {
            if (row?.clothes_id) return row?.clothes_id;
            if (row?.shoe_id) return row.shoe_id;
            else return row?.product_id;
          }}
          disableSelectionOnClick
        />
        <div>
          <Modal
            width={"700px"}
            noPadding
            open={visible}
            onClose={closeHandler}
          >
            <Modal.Header
              css={{
                position: "absolute",
                zIndex: "$1",
                top: 5,
                right: 8,
                width: "100%",
              }}
            >
              <p style={{ fontSize: "25px", fontWeight: "bold" }}>
                Thêm Sản Phẩm Mới
              </p>
            </Modal.Header>
            <Modal.Body>
              <form
                id="myform"
                style={{
                  display: "flex",
                  gap: "20px",
                  flexWrap: "wrap",
                  marginTop: "10px",
                  padding: "40px",
                }}
                onSubmit={handleAddProduct}
              >
                <input
                  name="newProductName"
                  type="text"
                  placeholder="Tên Sản Phẩm"
                  color="default"
                  style={{
                    width: "300px"
                  }}
                />
                <input
                  name="newManufacturer"
                  type="text"
                  placeholder="Hãng sản xuất"
                  color="default"
                  style={{
                    width: "300px"
                  }}
                />

                <input
                  name="newEntryPrice"
                  placeholder="Giá Nhập"
                  
                  color="default"
                  style={{
                    width: "300px"
                   
                  }}
                  type="text"
                />

                <input
                  name="newSellPrice"
                  placeholder="Giá Bán"
                  color="default"
                  style={{
                    width: "300px"   
                  }}
                  type="text"
                />

                <label for="manufacturer" style={{ fontSize: "14px" }}>
                  Nhà Cung cấp
                </label>
                <br />
                <select id="supplier_id"  name="supplier_id" value={valueManufacturer}  onChange={handleValueManufacturer}>
                  <option value="SUP0001  ">OUTERITY</option>
                  <option value="SUP0002  ">CANIFA</option>
                  <option value="SUP0003  ">DONY</option>
                  <option value="SUP0004  ">COOL MATE</option>
                  <option value="SUP0005  ">GUCCI</option>
                </select>
                <label for="supplier_id" style={{ fontSize: "14px" }}>
                  Danh mục
                </label>
                <br />
                <select
                  id="category"
                  name="newCategory"
                  value={valueCategory}
                  onChange={handleValueCategory}
                >
                  <option value="CAT0001    ">TANKTOP</option>
                  <option value="CAT0002    ">SHOE</option>
                  <option value="CAT0003    ">PANT</option>
                  <option value="CAT0004    ">POLO</option>
                  <option value="CAT0005    ">WINTER</option>
                  <option value="CAT0006    ">SHORT</option>
                </select>

               
                <input
                  bordered
                  labelRight=".jpg"
                  placeholder="https://avatar"
                  style={{width:"75%"}}
                  name="newIllustration"
                />
              </form>
              <Button
                shadow
                color="primary"
                auto
                form="myform"
                style={{ margin: "20px" }}
              >
                Thêm
              </Button>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    );
  };
  return (
    <Routes>
      <Route path="/" element={<ProductList setProduct={setProduct} />} />
      <Route
        path="/edit/:id"
        element={<ProductEditDetail product={product} />}
      />
    </Routes>
  );
};

export default Product;
