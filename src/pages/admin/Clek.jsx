import React, { useState, useEffect } from "react";
import "./customer.scss";
import { Routes, Route, Link } from "react-router-dom";
import { Avatar } from "@nextui-org/react";
import { DataGrid } from "@mui/x-data-grid";
import { GrAddCircle } from "react-icons/gr";
import avt from "../../images/avt_default.png";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Modal, Input, Grid, Button } from "@nextui-org/react";
import ProductEditDetail from "./ProductEdit";
import axios from "axios";
const Clek = (props) => {
  const ProductList = () => {
    const [visible, setVisible] = React.useState(false);
    const [valueManufacturer, setValueManufacturer] = React.useState("");
    const handleValueManufacturer = (e) => {
      handleValueCategory(e.target.value);
    };
    const [valueCategory, setValueCategory] = React.useState("");
    const handleValueCategory = (e) => {
      setValueCategory(e.target.value);
    };
    const handler = () => setVisible(true);
    const closeHandler = () => {
      setVisible(false);
    };
    const products_field = [
       { field: "clek_id", headerName: "ID", width: 130 },
      {
        field: "fname",
        headerName: "Họ",
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
        field: "lname",
        headerName: "Tên",
        width: 150,
        sorttable:true,
        type:'number',
        renderCell: (params) => {
          return (
            <div className="userItem">
              {params.row.sell_price == ""
                ? "undefined"
                : Number(params.row.sell_price)}
            </div>
          );
        },
      },
      {
        field: "bdate",
        headerName: "Ngày Sinh",

        width: 150,
        type:'string',
        renderCell: (params) => {
          return (
            <div className="userItem">
              {params.row.entry_price == ""
                ? "undefined"
                : params.row.entry_price}
            </div>
          );
        },
      },

      {
        field: "sex",
        headerName: "Giới tính",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        type:"string",
        width: 120,
        renderCell: (params) => {
          return (
            <div className="userItem">
              {params.row?.amount == null ? params.row?.total  : params.row?.amount}
            </div>
          );
        },
      },
      {
        field: "Address",
        headerName: "Địa chỉ",
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
        field: "Salary",
        headerName: "Lương",
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
        field: "Certificate",
        headerName: "Bằng cấp",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 200,
        renderCell: (params) => {
          return (
            <div className="userItem">
              {params.row?.clothes_elastic ? params.row?.clothes_elastic:"" }
            </div>
          );
        },
      },
      {
        field: "date_in",
        headerName: "Ngày vào làm",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 200,
        renderCell: (params) => {
          return (
            <div className="userItem">
              {params.row?.style  ? params.row.style:''}
            </div>
          );
        },
      },
      {
        field: "Type_of_Clek",
        headerName: "Loại nhân viên",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 200,
        renderCell: (params) => {
          return (
            <div className="userItem">
              {params.row?.color ? params.row.color:''}
            </div>
          );
        },
      },
      {
        field: "ID_BRANCH",
        headerName: "Mã chi nhánh",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 200,
        renderCell: (params) => {
          return (
            <div className="userItem">
              {params.row?.color ? params.row.color:''}
            </div>
          );
        },
      },
      {
        field: "ID_Maneger",
        headerName: "Mã người quản lý",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 200,
        renderCell: (params) => {
          return (
            <div className="userItem">
              {params.row?.color ? params.row.color:''}
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
              <Link to={`./edit/${params.row.id}`}>
                <button
                  className="userListEdit"
                  onClick={() => {
                    renderRow();
                    setUser(params.row);
                  }}
                >
                  Edit
                </button>
              </Link>

              <DeleteOutlineIcon
                className="userListDelete"
                onClick={() => {
                  // deleteUser(params.id);
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

    const [rows, setRows] = useState([{"id":'11',fname:"tuong"}]);
    // useEffect(() => {
     
    //   axios
    //     .get("http://localhost:8090/admin/product", {
    //       headers: {
    //         "Access-Control-Allow-Headers": "Origin, Content-Type, Accept",
    //         "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    //       },
    //     })
    //     .then((res) => {
    //       setRows(res.data);
    //     });
    // }, []);
    return (
      <div style={{ height: "80vh", width: "100%" }}>
        <DataGrid    
          rows={rows}
          columns={products_field}    
          pageSize={100}
          rowsPerPageOptions={[10]}
          checkboxSelection
          //disableSelectionOnClick  
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
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  flexWrap: "wrap",
                  marginTop: "10px",
                  padding: "40px",
                }}
              >
                <Grid>
                  <Input
                    type="text"
                    label="Tên Sản Phẩm"
                    color="default"
                    width="250px"
                  />
                </Grid>
                <Grid>
                  <Input
                    label="Giá Nhập"
                    color="default"
                    width="150px"
                    type="text"
                  />
                </Grid>
                <Grid>
                  <Input
                    label="Giá Bán"
                    color="default"
                    width="150px"
                    type="text"
                  />
                </Grid>
                <Grid>
                  <label for="manufacturer" style={{ fontSize: "14px" }}>
                    Nhà Cung cấp
                  </label>
                  <br />
                  <select
                    id="manufacturer"
                    value={valueManufacturer}
                    onChange={handleValueManufacturer}
                  >
                    <option value="012f19b4  ">OUTERITY</option>
                    <option value="226f984f  ">CANIFA</option>
                    <option value="d0580d4e  ">DONY</option>
                    <option value="ed507355  ">COOL MATE</option>
                    <option value="ff29a242  ">GUCCI</option>
                  </select>
                </Grid>
                <Grid>
                  <Input
                    label="Số lượng"
                    color="default"
                    width="100px"
                    type="number"
                  />
                </Grid>
                <Grid>
                  <Input label="Kích cỡ" color="default" width="100px" />
                </Grid>
                <Grid>
                  <label for="manufacturer" style={{ fontSize: "14px" }}>
                    Danh mục
                  </label>
                  <br />
                  <select
                    id="manufacturer"
                    value={valueCategory}
                    onChange={handleValueCategory}
                  >
                    <option value="018c350b    ">TANKTOP</option>
                    <option value="07d9d019    ">SHOE</option>
                    <option value="51753faf    ">PANT</option>
                    <option value="93be540f    ">POLO</option>
                    <option value="d1a8bce4    ">WINTER</option>
                    <option value="d8ebf59f    ">SHORT</option>
                  </select>
                </Grid>
                <Grid>
                  <Input
                    bordered
                    labelRight=".jpg"
                    placeholder="https://avatar"
                    width="350px"
                  />
                </Grid>
              </div>
              <Button shadow color="primary" auto>
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
      <Route path="/" element={<ProductList />} />
      <Route
        path="/edit/:id"
        element={
          <ProductEditDetail user={props.user} renderRow={props.renderRow} />
        }
      />
    </Routes>
  );
};

export default Clek;
