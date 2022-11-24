import React from "react";
import "./customer.scss";
import { getContact } from "../../reduxToolkit/apiRequest";
const Contact = () => {
  const [render, setRender] = React.useState([]);
  getContact({ action: "getContact" }).then((res) => setRender(res));
  return (
    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>Họ Và Tên</th>
          <th>Email</th>
          <th>Số điện thoại</th>
          <th>Vấn đề</th>
          <th>Nội dung chi tiết</th>
        </tr>
        {[1,2,3,4]?.map((item, index) => (
          <tr key={index}>
            {/* <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.type}</td>
            <td>{item.detail}</td> */}
             <td>Ichi tsasasasassaaD</td>
          <td>Họ Vàchi tsasasasassaachi tsasasasassaa Tên</td>
          <td>Emaichi tsasasasassaachi tsasasasassaachi tsasasasassaachi tsasasasassaal</td>
          <td>Số đichi tsasasasassaaệchi tsasasasassaachi tsasasasassaachi tsasasasassaachi tsasasasassaachi tsasasasassaan tdoại</td>
          <td>Vấn chi tsasasasassaachi tsasasasassaachi tsasasasassaachi tsasasasassaachi tsasasasassaachi tsasasasassaachi tsasasasassaachi tsasasasassaađề</td>
          <td>Nội dung chi tsasasasassaachi tsasasasassaachi tsasasasassaachi tsasasasassaachi tsasasasassaachi tsasasasassaaaaaaaaaaaaaiết</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Contact;
