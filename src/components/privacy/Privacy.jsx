import React from 'react';
import './privacy.scss'
import './table.scss'
import 'boxicons'

const Privacy = ({show,setShow}) => {

  return <div className='privacy'>
      <div className="privacy__overlay" onClick={()=>setShow(!show)}></div>
      <div className="privacy__title"><span>
           Chính sách thuê Pin</span>
           <box-icon name='x' size="lg" onClick={()=>setShow(!show)}></box-icon>
           </div>
      <div className="privacy__content">
          <div className="cost">
              <div className="label">1. Biểu phí</div>
              <div className="text">
                  <Table />
              </div>
          </div>
          <div className="paying__battery">
              <div className="label">2. THANH TOÁN PHÍ THUÊ BAO PIN</div>
              <div className="text">
                  <ul>
                      <li>Phí thuê bao Pin theo tháng được thu trước ngày 01 của tháng; Khách hàng có thể đóng 1 tháng hoặc nhiều tháng một lúc</li>
                      <li>Nếu Khách hàng trả phí thuê bao chậm quá 6 ngày tính từ ngày đến hạn thì hệ thống sẽ tự động khóa kết nối của xe (xe không khởi động được). Việc khóa kết nối sẽ chấm dứt ngay sau khi Khách hàng hoàn thành các nghĩa vụ thanh toán.
                        </li>
                  </ul>
              </div>
          </div>
          <div className="method__payment">
              <div className="label">
3. HÌNH THỨC THANH TOÁN</div>
              <div className="text">
                  <ul>
                      <li>Quý khách thanh toán phí thuê Pin trực tiếp tại Đại lý Ủy quyền, Showroom và các Trạm đổi Pin tại VinMart+ (theo các phương thức thanh toán của cửa hàng) hoặc thanh toán online qua ứng dụng VinID:
</li>
                     
                  </ul>
                  <ul className='tutorial'>
                      <li>01. Dành cho Khách hàng chưa cài VinID <a href='#'>(Xem hướng dẫn chi tiết)</a></li>
                      <li>02. Dành cho Khách hàng đã cài đặt VinID nhưng chưa liên kết ví điện tử<a href='#'>(Xem hướng dẫn chi tiết)</a></li>
                      <li>03. Dành cho Khách hàng đã cài đặt VinID và liên kết ví điện tử<a href='#'>(Xem hướng dẫn chi tiết)</a></li>
                  </ul>
              </div>
          </div>
      </div>
  </div>;
};
const Table = () => {
    return <>
        <div class="tableWrapper">
<table class="table">
<thead>
<tr>
<th>TT</th>
<th width="30%">Hạng mục</th>
<th width="20%">Mức phí (VNĐ)</th>
<th>Ghi chú</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>I</strong></td>
<td><strong>Phương án mua Pin</strong></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td>Giá bán Pin</td>
<td>8.600.000/1 Pin</td>
<td>– Giá bán đã bao gồm VAT<br/>– Pin được bảo hành 03 năm</td>
</tr>
<tr>
<td><strong>II</strong></td>
<td><strong>Phương án thuê Pin</strong></td>
<td></td>
<td></td>
</tr>
<tr>
<td>1</td>
<td>Đặt cọc Pin</td>
<td>1.200.000/1 Pin</td>
<td>Sẽ hoàn trả KH khi thanh lý hợp đồng thuê Pin</td>
</tr>
<tr>
<td>2</td>
<td>Phí thuê bao hàng tháng</td>
<td></td>
<td>Áp dụng từ 13/02/2020. Khách hàng có nhu cầu chuyển đổi gói thuê bao tháng vui lòng gọi Hotline 1900 23 23 89 hoặc ra các Đại lý ủy quyền/Showroom VinFast để được hỗ trợ</td>
</tr>
<tr>
<td>2.1</td>
<td>Gói thuê bao tiêu chuẩn</td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td>– 1 Pin</td>
<td>220.000</td>
<td rowspan="2">Không giới hạn quãng đường đi</td>
</tr>
<tr>
<td></td>
<td>– 2 Pin</td>
<td>350.000</td>
</tr>
<tr>
<td>2.2</td>
<td>Gói thuê bao siêu tiết kiệm</td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td>– 1 Pin</td>
<td>149.000</td>
<td rowspan="2">– Giới hạn đi không quá 300 km/tháng cho xe mà Khách hàng sử dụng đăng ký gói Siêu tiết kiệm. Nếu tháng nào Khách hàng đi quá giới hạn này thì cước phí tháng đó sẽ tính giá theo gói thuê bao Tiêu chuẩn.<p></p>
<p>– Trong trường hợp Khách hàng vừa sử dụng Pin thuê của VinFast, vừa sử dụng Pin khác (Pin của Khách hàng, Pin mượn v.v.) và đã đăng ký sử dụng gói Siêu tiết kiệm thì:<br/>
(i) Vẫn áp dụng gói Siêu tiết kiệm nếu xe của Khách hàng có quãng đường chạy không quá 300 km/tháng<br/>
(ii) Không áp dụng gói Siêu tiết kiệm nếu xe của Khách hàng có quãng đường chạy trên 300 km/tháng, bất kể là Khách hàng sử dụng Pin thuê của VinFast hay Pin khác để chạy xe.
</p></td>
</tr>
<tr>
<td></td>
<td>– 2 Pin</td>
<td>299.000</td>
</tr>
<tr>
<td>3</td>
<td>Phí đổi Pin</td>
<td>25.000/lần/Pin</td>
<td>Áp dụng phí đổi Pin từ ngày 21/4/2020</td>
</tr>
<tr>
<td>4</td>
<td>Phí cứu hộ Pin</td>
<td>50.000/lần /Pin</td>
<td></td>
</tr>
</tbody>
</table>
<p class="container list">*<em> Danh sách các tỉnh có dịch vụ cứu hộ Pin: Bắc Ninh, Hà Nội, Hải Phòng, Phú Thọ, Quảng Ninh, Bình Dương, Cần Thơ, Đồng Nai, Hồ Chí Minh, Đà Nẵng, Khánh Hòa, Huế (Áp dụng trong phạm vi nội thành).</em></p>
</div>
    </>
}

export default Privacy;
