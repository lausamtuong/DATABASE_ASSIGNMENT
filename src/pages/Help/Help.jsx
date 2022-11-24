import React ,{useEffect, useState}from "react";
import "./style.scss";
import MenuItem from "@mui/material/MenuItem";

const currencies = [
  {
    value: "select",
    label: "Lựa chọn",
  },
  {
    value: "Policy",
    label: "Chính sách",
  },
  {
    value: "Purchase",
    label: "Mua hàng",
  },
  {
    value: "Help",
    label: "Hỗ trợ",
  },
  {
    value: "Promotion",
    label: "Khuyễn mãi",
  },
  {
    value: "Feedback",
    label: "Góp ý",
  },
];
import TextField from "@mui/material/TextField";
import { contact } from "../../reduxToolkit/apiRequest";
import { useNavigate } from "react-router-dom";
const Help = () => {
    const navigate = useNavigate()
  const [currency, setCurrency] = useState("select");
  const [data,setData] = useState({
      name:'',
      email:'',
      phone:'',
      type:'',
      detail:'',
    action: "contact",
  })
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  useEffect(()=>{
      window.scrollTo(0,0)
  },[])
  const submitForm = () =>{
    if(data.name.length>0 && data.email.length>0 && data.phone.length>0 && data.detail.length>0)
    contact(data,navigate)
    else alert('Vui lòng nhập đầy đủ thông tin')
  }
   return (
    <div>
      <div className="title_help">
        <p>Liên hệ VietFast</p>
      </div>
      <div className="address">
        <div className="address_item">
          <div className="address_title">Địa chỉ</div>
          <div className="address_des">
            Khu kinh tế Đình Vũ – Cát Hải, Đảo Cát Hải, Thị trấn Cát Hải, Huyện
            Cát Hải, Thành phố Hải Phòng, Việt Nam.
          </div>
        </div>
        <div className="address_item">
          <div className="address_title">Chi nhánh Hà Nội</div>
          <div className="address_des">
            Tầng 7, Toà Symphony, Đường Chu Huy Mân, Khu đô thị Vinhomes
            Riverside Long Biên, Long Biên, Hà Nội, Việt Nam.
          </div>
        </div>
        <div className="address_item">
          <div className="address_title">Thông tin liên hệ</div>
          <div className="address_des">
            <div>
              <span className="bold">Hotline</span>
              <span>123456789</span>
            </div>
            <div>
              <span className="bold">Email</span>
              <span>laptrinhweb@hcmut.edu.vn</span>
            </div>
            <div>
              <span className="bold">Facebook</span>
              <span>https://www.facebook.com/Vietfastt</span>
            </div>
          </div>
        </div>
      </div>
      <div className="send">
        <div className="send_title">Gửi câu hỏi hoặc góp ý tới VietFast</div>
        <div className="send_des">
          Chúng tôi sẽ phản hồi Quý khách trong thời gian sớm nhất.
        </div>
      </div>
      <div className="box_help">
        <TextField
          id="outlined-basic"
          sx={{ width: "350px" }}
          label="Họ Và Tên"
          variant="outlined"
          onBlur={(e)=>{setData(state=>  {return {...state,name:e.target.value}})}}
        />
        <TextField
          id="outlined-select-currency"
          select
          label="Vấn đề *"
          value={currency}
          onChange={handleChange}
          helperText="Please select your issue"
          sx={{ width: "350px" }}
          onBlur={(e)=>{setData(state=>  {return {...state,type:currency}})}}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-basic"
          sx={{ width: "350px" }}
          label="Số điện thoại"
          variant="outlined"
          onBlur={(e)=>{setData(state=>  {return {...state,phone:e.target.value}})}}
        />
        <TextField
          id="outlined-basic"
          sx={{ width: "350px" }}
          label="Email"
          variant="outlined"
          onBlur={(e)=>{setData(state=>  {return {...state,email:e.target.value}})}}
        />
        <TextField
          id="outlined-multiline-static"
          label="Nội dung chi tiết *"
          multiline
          rows={6}
          placeholder="Nhập nội dung chi tiết vấn đề Quý khách muốn gửi tới VietFast"
          sx={{ width: "720px" }}
          onBlur={(e)=>{setData(state=>  {return {...state,detail:e.target.value}})}}
        />
      </div>
      <div className="button_send">
        <button onClick={submitForm}>Gửi thông tin</button>
      </div>
    </div>
  );
};

export default Help;
