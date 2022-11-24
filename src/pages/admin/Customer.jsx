import React,{useState} from 'react'
import { DataGrid } from "@mui/x-data-grid";
import './customer.scss'
import { Routes, Route,Link } from 'react-router-dom';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import UserEdit from './UserEdit';
import { useEffect } from 'react';
import { AiOutlineReload,AiOutlineDown } from "react-icons/ai";
import { getAllCustomers } from '../../reduxToolkit/apiRequest';
const Customer = () => {
  const [rows, setRow] = useState([]);
  const columns = [
    { field: "customer_id", headerName: "ID", width: 70 },
    {
      field: "l_name",
      headerName: "Họ",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userItem">
            {/* <Avatar src={params.row.image == "" ? avt : params.row.image} /> */}
            <span className="username">
              {params.row.l_name == "" ? "undefined" : params.row.l_name}
            </span>
          </div>
        );
      },
    },
    {
      field: "f_name",
      headerName: "Tên",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="userItem">
            {params.row.f_name == "" ? "undefined" : params.row.f_name}
          </div>
        );
      },
    },
    {
      field: "register_day",
      headerName: "Ngày Đăng Kí",
      type: "string",
      width: 170,
      renderCell: (params) => {
        return (
          <div className="userItem">
            {params.row.register_date == "" ? "undefined" : params.row.register_date}
          </div>
        );
      },
    },
    {
      field: "sex",
      headerName: "Giới tính",
      type: "string",
      width: 90,
      renderCell: (params) => {
        return (
          <div className="userItem">
            {params.row.sex == "" ? "undefined" : params.row.sex}
          </div>
        );
      },
    },
    {
      field: "bdate",
      headerName: "Ngày sinh",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 170,
      renderCell: (params) => {
        return (
          <div className="userItem">
            {params.row.bdate == "" ? "0" : params.row.bdate}
          </div>
        );
      },
    },
    {
      field: "accumulate_point",
      headerName: "Điểm tích lũy",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 120,
      type:"number",
      renderCell: (params) => {
        return (
          <div className="userItem">
            {params.row.accumulate_point == "" ? "0" : params.row.accumulate_point}
          </div>
        );
      },
    },
   
    {
      field: "_level",
      headerName: "Cấp độ",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 100,
      renderCell: (params) => {
        return (
          <div className="userItem">
            {params.row._level == "" ? "0" : params.row._level}
          </div>
        );
      },
    },
    {
      field: "_address",
      headerName: "Địa chỉ",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 250,
      renderCell: (params) => {
        return (
          <div className="userItem">
            {params.row._address == "" ? "0" : params.row._address}
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
            <Link to={`./user/${params.row.id}`}>
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
                deleteUser(params.id);
              }}
            />
          </>
        );
      },
    },
    {
      field: "reload",
      headerName: <AiOutlineReload style={{cursor:'pointer'}} onClick={()=>{ renderRow()}}/>,
      sortable: false,
      editable: false,
      filter: false,
      width: 70,
      
    },
    
  ];
  useEffect(async() => {
    const temp  = await getAllCustomers()

    setRow(temp);
   },[] );
  const CustomerList = () => {
    return (
      <div style={{ height: "80vh", width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick 
          getRowId={(row) => row?.customer_id}
        />
       
      </div>
    );
  };
  return (
      <Routes>
          <Route path='/' element={<CustomerList   /> } />
          <Route path='/user/:id' element={<UserEdit 
       //   user={props.user} renderRow={props.renderRow} 
          />}/>
      </Routes>
  );
}





export default Customer