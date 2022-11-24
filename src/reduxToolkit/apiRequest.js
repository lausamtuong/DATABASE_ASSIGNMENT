import {
  loginFalse,
  loginStart,
  loginSuccess,
  registerFalse,
  registerSuccess,
  registerStart,
  logout,
  commentError,
  commentSuccess,
  addCart,
  filter,
} from "./authSlice";

import axios from "axios";
export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  dispatch(loginSuccess(user));
 const users = await axios.post("http://localhost:8090/login", user).then((res) => {
  //   if (res.data == "login false") {
  //     dispatch(loginFalse());
  //     const target = document.querySelector(".overlayz");
  //     setTimeout(() => {
  //       target.classList.toggle("none");
  //     }, 3000);
  //   } else {
  //    window.localStorage.setItem("user", JSON.stringify(res.data));
  //    const user =  JSON.parse(window.localStorage.getItem("user"));
  //     if (res.data.isAdmin == "false"){
  //       setTimeout(() => {
  //         dispatch(loginSuccess(res.data));
  //        navigate('/')
  //       }, 3000);
  //       return;
  //     }
  //     if(res.data.isAdmin =='true'||user.isAdmin=='true')
  //       setTimeout(() => {
  //         dispatch(loginSuccess(res.data));
          
  //       }, 3000);
  //   }
  setTimeout(() => {
             dispatch(loginSuccess(res.data[0]));
           navigate('/')
           }, 3000);
   });
   return users;
};
export const logoutUser = async (dispatch, navigate) => {
  dispatch(logout());
  navigate("/login");
};
export const search = async (data) => {
 
 const list= await axios.post("http://localhost:8090/search",{
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      'Content-Type': 'text/plain',
    },
    data:data
   }).then((res)=>{return (res.data)})
   return list
};
export const getAllProduct = async () => {
  const list= await axios.get("http://localhost:8090/getAllProduct",{
    headers: {
      'Content-Type': 'text/plain',
    }
   }).then((res)=>{return (res.data)})
   return list
};
export const filterProduct = async (data) => {
  const list= await axios.post("http://localhost:8090/filterProduct",{
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      'Content-Type': 'text/plain',
    },
    data:data
   }).then((res)=>{return (res.data)})
   return list
};
export const getCart = async (customer_id) => {
  const list= await axios.post("http://localhost:8090/getCart",{
    headers: {
      'Content-Type': 'text/plain',
    },
    data:customer_id
   }).then((res)=>{return (res.data)})
   return list
};
export const getProductCart = async (cart_id) => {
  const list= await axios.post("http://localhost:8090/getProductCart",{
    headers: {
      'Content-Type': 'text/plain',
    },
    data:cart_id
   }).then((res)=>{return (res.data)})
   return list
};
export const getAllCustomers = async () => {
  const list= await axios.get("http://localhost:8090/admin/getAllCustomers",{
    headers: {
      'Content-Type': 'text/plain',
    }
   
   }).then((res)=>{return (res.data)})
   return list[0]
};
export const addProduct = async (data,navigate ) => {
  await axios.post("http://localhost:8090/admin/addProduct",{
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      'Content-Type': 'text/plain',
    },
    data:data
   })
  .then((res)=> {
    res.data
    navigate("")
  }
    )
  .catch((error)=> alert(error.response.data))
};
export const addProductChild = async (data,navigate ) => {
  await axios.post("http://localhost:8090/admin/addProductChild",{
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      'Content-Type': 'text/plain',
    },
    data:data
   })
  .then((res)=> {
    res.data
    navigate("")
  }
    )
  .catch((error)=> alert(error.response.data))
};
export const  getDetailProduct = async (id) => {
  try {
    const detail = await axios.post("http://localhost:8090/getDetailProduct", {data:id}).then((res) => {
      return res.data; 
    });
    return detail;
  } catch (error) {
   
  }
};
export const  addToCart = async (data,dispatch) => {
  dispatch(addCart(data));
};
export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    axios.post("http://localhost:8090/register", user).then((res) => {
      console.log(res.data);
      // if (res.data == "emailError") {
      //   const target = document.querySelector(".overlayz");
      //   target.classList.toggle("none");
      // } else {
      //   alert("Đăng kí thành công");
      //   dispatch(registerSuccess());
      //   navigate("/login");
      // }
    });
  } catch (error) {
    dispatch(registerFalse());
  }
};

export const updateUserPassword = async (data, dispatch, navigate) => {
  // axios.post("http://localhost:8080/WEB/Vietfast/BE/index.php", data).then((res) => {
  //   alert(res.data);
  //   dispatch(logout());
  // });
};

export const updateUser = async (data, dispatch) => {
  // axios.post("http://localhost:8080/WEB/Vietfast/BE/index.php", data).then((res) => {
  // alert('Cập nhật thông tin thành công!');
  //   dispatch(logout());
  // });
};
export const senCommentToDB = async (data, dispatch) => {
  try {
    // console.log(data);
    // axios.post("http://localhost:8080/WEB/Vietfast/BE/index.php", data).then((res) => {
    //   dispatch(commentSuccess());
    // });
  } catch (error) {
    dispatch(commentError());
  }
};
export const deleteCommentToDB = async (data, dispatch) => {
    // axios.post("http://localhost:8080/WEB/Vietfast/BE/index.php", data).then((res) => {
    // });
  } 


export const getComment = async (data) => {
  // const list = axios
  //   .post("http://localhost:8080/WEB/Vietfast/BE/index.php", data)
  //   .then((res) => {
  //     return res.data;
  //   });
  // return list;
};
export const getTransaction = async (data) => {
  // const list = axios
  //   .post("http://localhost:8080/WEB/Vietfast/BE/index.php", data)
  //   .then((res) => {
  //     console.log(res);
  //     return res.data;
  //   });
  // return list;
};
export const setAvt = async (data, dispatch) => {
  // axios.post("http://localhost:8080/WEB/Vietfast/BE/index.php", data).then((res) => {
  //   // alert("Cập nhật ảnh đại diện thành công! Yêu cầu đăng nhập lại.");
  //    dispatch(logout());
  // });
};
export const payment = async (data) => {
  // console.log(data);
  // axios.post("http://localhost:8080/WEB/Vietfast/BE/index.php", data).then((res) => {
  //   console.log(res.data)
  // });
};
export const getRow = async (data) => {
//   const list = axios
//   .post("http://localhost:8080/WEB/Vietfast/BE/index.php", data)
//   .then((res) => {
//     return res.data;
//   });
// return list;
}
export const deleteUsers = async (data) => {
  // axios.post("http://localhost:8080/WEB/Vietfast/BE/index.php", data).then((res) => {
  //   console.log(res.data)
  // });
}
export const contact = async (data,navigate) => {
  // axios.post("http://localhost:8080/WEB/Vietfast/BE/index.php", data).then((res) => {
  //   alert("Thành Công")
  //   navigate('/')
  // });
}
export const getContact = async (data) => {
  // const list = await axios.post("http://localhost:8080/WEB/Vietfast/BE/index.php", data).then((res) => {
  //  return (res.data);
  // })
  // return list;
}