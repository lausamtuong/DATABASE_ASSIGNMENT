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

//const BASE_URL= "https://backend-dbms.onrender.com"
const BASE_URL = "http://localhost:8090";
import axios from "axios";
export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  dispatch(loginSuccess(user));
  const users = await axios
    .post(`${BASE_URL}/login`, { data: user })
    .then((res) => {
      console.log(res.data)
      if (!res.data?.user ) {
        dispatch(loginFalse());
        const target = document.querySelector(".overlayz");
        setTimeout(() => {
          target.classList.toggle("none");
        }, 3000);
      } else {

        window.localStorage.setItem("user", JSON.stringify(res.data.user));
        window.localStorage.setItem("cart_id", JSON.stringify(res.data.cart_id));
        
        if (res.data.user.type_account == "Tài khoản khách hàng") {
          setTimeout(() => {
            dispatch(loginSuccess(user));
            navigate("/");
          }, 3000);
          return;
        }
        if (
          res.data.user.type_account == "Tài khoản nhân viên" 
        ) {
          setTimeout(() => {
            dispatch(loginSuccess(user));
          }, 3000);
          navigate("/admin");
        }
        else alert("sai")
      }
    });
  return users;
};
export const logoutUser = async (dispatch, navigate) => {
  dispatch(logout());
  navigate("/login");
};
export const search = async (data) => {
  const list = await axios
    .post(`${BASE_URL}/search`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Content-Type": "text/plain",
      },
      data: data,
    })
    .then((res) => {
      return res.data;
    });
  return list;
};
export const getAllProduct = async () => {
  const list = await axios
    .get(`${BASE_URL}/getAllProduct`, {
      headers: {
        "Content-Type": "text/plain",
      },
    })
    .then((res) => {
      return res.data;
    });
  return list;
};
export const filterProduct = async (data) => {
  const list = await axios
    .post(`${BASE_URL}/filterProduct`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Content-Type": "text/plain",
      },
      data: data,
    })
    .then((res) => {
      return res.data;
    });
  return list;
};
export const getTotalMoneyOrder = async (order_id) => {
  const total_money = await axios
    .post(`${BASE_URL}/getTotalMoneyOrder`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Content-Type": "text/plain",
      },
      order_id,
    })
    .then((res) => {
      return res.data;
    });

  return total_money;
};
export const deleteOrderProduct = async (order_id, cart) => {
  const total_money = await axios
    .post(`${BASE_URL}/deleteOrderProduct`, { order_id, cart })
    .then((res) => {
      return res.data;
    });

  return total_money;
};
export const getCart = async (customer_id) => {
  const list = await axios
    .post(`${BASE_URL}/getCart`, {
      headers: {
        "Content-Type": "text/plain",
      },
      data: customer_id,
    })
    .then((res) => {
      return res.data;
    });
  return list;
};
export const getProductCart = async (cart_id) => {
  const list = await axios
    .post(`${BASE_URL}/getProductCart`, {
      headers: {
        "Content-Type": "text/plain",
      },
      data: cart_id,
    })
    .then((res) => {
      return res.data;
    });
  return list;
};
export const deleteCartProduct = async (product_id, cart_id) => {
  await axios.post(`${BASE_URL}/deleteCartProduct`, {
    headers: {
      "Content-Type": "text/plain",
    },
    data: { product_id, cart_id },
  });
};
export const getAllCustomers = async () => {
  const list = await axios
    .get(`${BASE_URL}/admin/getAllCustomers`, {
      headers: {
        "Content-Type": "text/plain",
      },
    })
    .then((res) => {
      return res.data;
    });
  return list[0];
};
export const addProduct = async (data, navigate) => {
  await axios
    .post(`${BASE_URL}/admin/addProduct`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Content-Type": "text/plain",
      },
      data: data,
    })
    .then((res) => {
      res.data;
      alert("Thêm sản phẩm thành công!");
      navigate("");
    })
    .catch((error) => alert(error.response.data));
};
export const addProductChild = async (data, navigate) => {
  await axios
    .post(`${BASE_URL}/admin/addProductChild`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Content-Type": "text/plain",
      },
      data: data,
    })
    .then((res) => {
      res.data;
      navigate("");
    })
    .catch((error) => alert(error.response.data));
};
export const getDetailProduct = async (id) => {
  try {
    const detail = await axios
      .post(`${BASE_URL}/getDetailProduct`, { data: id })
      .then((res) => {
        return res.data;
      });
    return detail;
  } catch (error) {}
};
export const getAllPromotions = async (data, dispatch) => {
  try {
    const promotions = await axios
      .get(`${BASE_URL}/getAllPromotions`)
      .then((res) => {
        return res.data;
      });
    return promotions;
  } catch (error) {}
};

export const addToCart = async (customer_id, item) => {
  try {
    axios.post(`${BASE_URL}/addToCart`, { customer_id, item }).then((res) => {
      console.log(res);
    });
  } catch (error) {
    console.log(error);
  }
};
export const updateCartProduct = async (
  product_id,
  cart_id,
  amount
) => {
  try {
    axios
      .post(`${BASE_URL}/updateCartProduct`, {
        product_id,
        cart_id,
        amount,
      })
      .then((res) => {});
  } catch (error) {
    console.log(error);
  }
};
export const updateCustomer = async (data, navigate) => {
  try {
    axios
      .post(`${BASE_URL}/admin/updateCustomer`, data)
      .then((res) => {
        alert("Cập nhật thông tin khách hàng thành công!");
        navigate("/admin");
      })
      .catch((error) => alert(error.response.data));
  } catch (error) {
    alert(error.response);
  }
};
export const insertOrder = async (customer_id) => {
  try {
    const order_id = await axios
      .post(`${BASE_URL}/insertOrder`, { customer_id })
      .then((res) => {
        return res.data;
      });
    return order_id;
  } catch (error) {
    console.log(error);
  }
};
export const insertProductOrder = async (order_id, cart) => {
  try {
    console.log(123);
    axios.post(`${BASE_URL}/insertProductOrder`, { order_id, cart }).catch(error=>console.log(error));
  } catch (error) {
    console.log(error);
  }
};
export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    axios.post(`${BASE_URL}/register`, user).then((res) => {
      if (res.data == "Lỗi: Mật khẩu chứa ít nhất 1 kí tự đặc biệt: @/$/&") {
        const target = document.querySelector(".overlayz");
        target.classList.toggle("none");
     
      } else {
       
        alert("Đăng kí thành công");
        dispatch(registerSuccess());
        navigate("/login");
      }
    }).catch(error=>alert(error.response.data));
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

export const payment = async (data) => {
  try {
    axios.post(`${BASE_URL}/payment`, data);
  } catch (error) {}
};
export const getsumary = async (data) => {
  const list = await axios.get(`${BASE_URL}/admin/sumary`).then((res) => {
    return res.data;
  });
  return list;
};
export const getsumaryOrder = async (data) => {
  const list = await axios.get(`${BASE_URL}/admin/sumaryOrder`).then((res) => {
    return res.data;
  });
  return list;
};
export const getsumaryMoney = async (data) => {
  const list = await axios.get(`${BASE_URL}/admin/sumaryMoney`).then((res) => {
    return res.data;
  });
  return list;
};
export const getsumaryProduct = async (data) => {
  const list = await axios
    .get(`${BASE_URL}/admin/sumaryProduct`)
    .then((res) => {
      return res.data;
    });
  return list;
};
export const getTrans = async (data) => {
  const list = await axios.get(`${BASE_URL}/admin/getTrans`).then((res) => {
    return res.data;
  });
  return list;
};
export const updateProduct = async (data, navigate) => {
  await axios
    .post(`${BASE_URL}/admin/updateProduct`, data)
    .then((res) => {
      alert(res.data);
      navigate("/admin/product");
    })
    .catch((error) =>
      alert(error.response.data.precedingErrors[0].originalError.info.message)
    );
};


export const getAmountChild = async (product_id,size) => {
  const data = await axios.post(`${BASE_URL}/getAmountChild`, { product_id,size}).then(res=>{return res.data})
  return data[0][0].Total
};
export const deleteUsers = async (product_id) => {
  axios.post(`${BASE_URL}/admin/deleteUsers`, { product_id });
};
export const deleteCustomer = async (customer_id) => {
  axios.post(`${BASE_URL}/admin/deleteCustomer`, { customer_id });
};
export const updateUser = async (product_id) => {
  //axios.post(`${BASE_URL}/admin/deleteUsers`, { product_id });
};
export const contact = async (data, navigate) => {
  // axios.post("http://localhost:8080/WEB/Vietfast/BE/index.php", data).then((res) => {
  //   alert("Thành Công")
  //   navigate('/')
  // });
};
export const getContact = async (data) => {
  // const list = await axios.post("http://localhost:8080/WEB/Vietfast/BE/index.php", data).then((res) => {
  //  return (res.data);
  // })
  // return list;
};
