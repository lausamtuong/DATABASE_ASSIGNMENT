import React, { useState } from "react";
import "./news.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import TextField from "@mui/material/TextField";
var cnt = 6;
var lo;

const News = () => {
  const admin = JSON.parse(window.localStorage.getItem("user"))?.isAdmin;
  
  const [addNew, setAddNew] = useState(false);
  const api= [
    {
      url:"",
      name: "Hơn 5.000 đăng ký tham gia cuộc thi toàn cầu của VietFast và Nas Academy",
      img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_03/Go%20Boundless%20Grand%20Prize_1647413260.jpg?itok=_dYKaUqt",
    },
    {
      url:"https://vinfastauto.com/vn_vi/thong-bao-chinh-sach-ban-hang-o-to-thang-062022",
      name: "VietFast công bố kết quả kinh doanh ô tô Tháng 2/2022",
      img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_03/9%20-%20Camping%20(%20c%E1%BA%B7p%20%C4%91%C3%B4i%20ng%E1%BB%93i%20%E1%BB%9F%20c%E1%BB%91p%204)%20DSCF2929%20copy_1646909567.jpg?itok=DmPq4ynf",
    },
    {
      url:"https://vinfastauto.com/vn_vi/thong-bao-chinh-sach-ban-hang-o-to-thang-052022",
      name: "VietFast tham dự triển lãm di động toàn cầu MWC 2022",
      img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_02/VinFast_1645781273.jpg?itok=yKUW6kzC",
    },
    {
      url:"https://vinfastauto.com/vn_vi/easy-credit-x-vinfast-tra-truoc-0-dong-ruoc-lien-vinfast",
      name: "VietFast thay đổi lựa chọn màu sơn ngoại thất đón đầu xu hướng",
      img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_02/1200x628_1645760182.png?itok=ws2Stn9O",
    },
    {
      url:"https://vinfastauto.com/vn_vi/vui-don-he-voi-vinfast-lux-a20-tang-voucher-nghi-duong-vinpearl",
      name: "Trải nghiệm không gian hiện đại, đẳng cấp tại VietFast Nguyễn Văn Linh",
      img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_02/vinfast-nguyen-van-linh-thumbnail_1645502749.jpg?itok=aFNer9U4",
    },
    {
      url:"https://vinfastauto.com/vn_vi/mua-xe-may-dien-vinfast-don-xuan-nham-dan-nhan-ngay-li-xi-hap-dan-tu-easy-credit",
      name: "VietFast và Nas Academy tổ chức cuộc thi toàn cầu truyền cảm hứng chuyển đổi từ xe xăng sang xe điện",
      img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_02/Frame%2025-jpg_1645089583.jpg?itok=5-X9I4tD",
    },
    {
      url:"https://vinfastauto.com/vn_vi/ngap-tran-uu-dai-khi-mua-xe-vinfast-don-tet-2022",
      name: "VietFast ra mắt xe máy điện Vento hoàn toàn mới, tốc độ tối đa 80km/h",
      img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_02/KV%20Vento-01_1644984147.jpg?itok=3TwvORTO",
    },
    {
      url:"https://vinfastauto.com/vn_vi/khong-can-tra-ngay-chia-khoa-vinfast-trao-tay-cung-acs",
      name: "Khám phá trải nghiệm xuất sắc chỉ có trên “ghế cơ trưởng” của VietFast VF 9",
      img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_02/VFe36_Lookdev_011_INTERIOR_2ND_ROW0000_1644563590.png?itok=50RM6UbK",
    },
    {
      url:"https://vinfastauto.com/vn_vi/tet-vui-gop-xe-lai-suat-cuc-me-chi-099",
      name: "VietFast công bố kết quả kinh doanh ô tô Tháng 1/2022",
      img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_02/Doanhsothang1_1644486610.png?itok=jtASL6C1",
    },
    {
      url:"https://vinfastauto.com/vn_vi/so-huu-xe-dien-vinfast-mo-uoc-voi-uu-dai-tra-gop-sieu-tiet-kiem-tu-hd-saison",
      name: "Khám phá kho giải trí đa dạng nội dung trong ứng dụng FPT Play trên VietFast VF e34",
      img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_02/FPT%20play%20KV_Option%202_KV%20hop%20tac%20FPT_1644894996.png?itok=puY79c4A",
    },
    {
      url:"https://vinfastauto.com/vn_vi/tra-gop-de-dang-ron-rang-don-xe-yeu-cung-vinfast",
      name: "VietFast thông báo chính sách cho thuê pin ô tô và chính sách sạc tại trạm sạc công cộng 2022",
      img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_03/Tram-sac-xe-o-to-dien-VinFast_1647501206.jpg?itok=IHNo1oBN",
    },
    {
      url:"https://vinfastauto.com/vn_vi/thanh-toan-tra-gop-0-tien-loi-qua-payoo-khi-mua-xe-may-dien-vinfast",
      name: "Lưu ý và hướng dẫn sử dụng bộ sạc di động 2.2 kW cho xe điện VietFast VF e34",
      img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_01/bo-sac-di-dong-vinfast-vfe34-thumb_1642410056.jpg?itok=TsyLqZ0P",
    },
    {
      url:"https://vinfastauto.com/vn_vi/thanh-toan-tra-gop-0-tien-loi-qua-payoo-khi-mua-xe-may-dien-vinfast",
      name: "VietFast nâng cao bảo hành lên 10 năm cho các dòng Ô tô chạy xăng",
      img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_01/OSxOF_1641963570.jpg?itok=ltbUXn52",
    },
    {
      url:"https://vinfastauto.com/vn_vi/thanh-toan-tra-gop-0-tien-loi-qua-payoo-khi-mua-xe-may-dien-vinfast",
      name: "VietFast bán ra tổng cộng 35.723 xe ô tô trong năm 2021",
      img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_01/IMG_2611_1641806963.jpg?itok=KYjfgVWl",
    },
    {
      url:"https://vinfastauto.com/vn_vi/ngap-tran-uu-dai-khi-mua-xe-vinfast-trong-thang-10",
      name: "VietFast triển khai dịch vụ sửa chữa lưu động chính hãng đầu tiên tại Việt Nam",
      img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_01/KV%20MBS%20T12_1641453801.png?itok=C4EuQqqy",
    },
    {
      url:"https://vinfastauto.com/vn_vi/ngap-tran-uu-dai-khi-mua-xe-vinfast-trong-thang-10",
      name: "VietFast cam kết phục vụ đến hết vòng đời với từng chiếc xe bán ra",
      img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_01/1600x900_1641613124.jpg?itok=O0xdSBVd",
    },
    {
      url:"https://vinfastauto.com/vn_vi/cung-home-credit-song-xanh-so-huu-xe-vinfast-sanh-dieu",
      name: "VietFast công bố chiến lược thuần điện và dải sản phẩm hoàn thiện tại CES 2022",
      img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_01/6N9A7750_1641435561.jpg?itok=imt77xmQ",
    },
    {
      url:"https://vinfastauto.com/vn_vi/mua-xe-online-ngap-tran-uu-dai-cung-vinfast-trong-thang-8",
      name: "VietFast công bố nhận đặt hàng trước xe VF e35, VF e36 và ứng dụng blockchain tại CES",
      img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_01/pic%202%20VinFast_CES_KV_1641265586.jpeg?itok=pHCuGjEj",
    },
    {
      url:"https://vinfastauto.com/vn_vi/lam-the-nao-de-huong-tron-290-trieu-dong-uu-dai-khi-mua-o-to-dien-vinfast-vf-e34",
      name: "Hệ thống showroom Vin3S sở hữu không gian công nghệ AR/VR trên toàn quốc",
      img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_12/vinfast-arvr_1640935065.jpg?itok=4wMMjZZK",
    },
    {
      url:"https://vinfastauto.com/vn_vi/chi-con-6-ngay-nhan-uu-dai-khung-gan-260-trieu-dong-khi-mua-xe-vinfast-vf-e34",
      name: "Vingroup bổ nhiệm bà Lê Thị Thu Thủy làm Tổng giám đốc VietFast toàn cầu thay ông Michael Lohscheller",
      img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_12/vinfast-ceo_1640682014.png?itok=Q4pQluJN",
    },
    {
      url:"https://vinfastauto.com/vn_vi/bat-tron-co-hoi-so-huu-xe-sang-vinfast-cung-loat-uu-dai-khung-thang-7",
      name: "VietFast bàn giao lô xe ô tô điện VF e34 đầu tiên cho Khách hàng",
      img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_12/vinfast-ban-giao-xe-dien-1_1640446224.jpg?itok=OQHJU_Mx",
    },
    {
      url:"https://vinfastauto.com/vn_vi/vinfast-uu-dai-100-le-phi-truoc-ba-cho-o-to-dien-chi-con-5-ngay-de-nhan-uu-dai-gan-200-trieu-dong-khi-mua-vf-e34",
      name: "VietFast giới thiệu dải sản phẩm ô tô điện và các công nghệ thông minh tại triển lãm CES 2022",
      img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_12/VinFast_CES_KV_Comp%20(1)-min_1639620395.png?itok=zTwvVSpR",
    },
    {
      url:"",
      name: "Vingroup khởi công nhà máy sản xuất pin VinES tại khu kinh tế Vũng Áng, Hà Tĩnh",
      img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_12/vines_1639309026.jpg?itok=2pqeQsq8",
    },
    {
      url:"https://vinfastauto.com/vn_vi/chuong-trinh-tang-the-ambassador-pearl-cho-khach-hang-vinfast",
      name: "VietFast công bố kết quả kinh doanh ô tô tháng 11/2021",
      img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_12/Doanhsothang19_thumb_1_1631274510_1633950016_1636543085%20(1)_1639138577.png?itok=6DAv2-w5",
    },
    {
      url:"https://vinfastauto.com/vn_vi/thong-bao-chinh-sach-ban-hang-o-to-thang-052022",
      name: "VietFast sẽ bàn giao lô xe ô tô điện VF e34 đầu tiên vào ngày 25/12/2021",
      img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_12/6a628609-256e-44b3-99be-7f28b06c50cd_1638961486.png?itok=orCOFk7O",
    },
    {
      url:"https://vinfastauto.com/vn_vi/mua-xe-may-dien-vinfast-don-xuan-nham-dan-nhan-ngay-li-xi-hap-dan-tu-easy-credit",
      name: "VietFast tập trung triển khai dịch vụ đổi pin cho xe máy điện tại hệ thống Xưởng Dịch vụ và Showroom Vin3S trên toàn quốc",
      img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_11/200tramsacVF_02_1628667897_1637298437.jpg?itok=JK6AHFFW",
    },
    {
      url:"https://vinfastauto.com/vn_vi/mua-xe-may-dien-vinfast-don-xuan-nham-dan-nhan-ngay-li-xi-hap-dan-tu-easy-credit",
      name: "VietFast chính thức khai trương Showroom VietFast 3S Hải Phòng",
      img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_11/Showroom%20Hai%20Phong1_1637201725.jpg?itok=tA0DSIom",
    },
    {
      url:"https://vinfastauto.com/vn_vi/tet-vui-gop-xe-lai-suat-cuc-me-chi-099",
      name: "VietFast ra mắt thương hiệu xe điện tại Los Angeles Auto Show 2021",
      img: "https://vinfastauto.com/sites/default/files/styles/news_360x200/public/2021-11/VF1_1637230117.jpg?itok=5YPxeRyV",
    },
    {
      url:"https://vinfastauto.com/vn_vi/tra-gop-de-dang-ron-rang-don-xe-yeu-cung-vinfast",
      name: "VietFast xuất khẩu lô xe đầu tiên sang thị trường Lào",
      img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_11/XK%20Lao_Anh%201_1636628282.JPG?itok=cuNZpEye",
    },
    {
      url:"https://vinfastauto.com/vn_vi/ngap-tran-uu-dai-khi-mua-xe-vinfast-trong-thang-10",
      name: "VietFast công bố kết quả kinh doanh ô tô Tháng 10/2021",
      img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_11/Doanhsothang19_thumb_1_1631274510_1633950016_1636543085.png?itok=nKYAHJE1",
    },
    {
      url:"https://vinfastauto.com/vn_vi/ngap-tran-uu-dai-khi-mua-xe-vinfast-don-tet-2022",
      name: "VietFast và EDF ký kết biên bản ghi nhớ hợp tác lắp đặt trạm sạc điện tại Pháp",
      img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_11/MOU%20VF_EDF_1636098006.jpg?itok=rCaoVSz8",
    },
    {
      url:"https://vinfastauto.com/vn_vi/ngap-tran-uu-dai-khi-mua-xe-vinfast-don-tet-2022",
      name: "Triệu hồi 2.853 xe Chevrolet Spark Van tại Việt Nam",
      img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_10/shutterstock_1193551489_1634881071.jpg?itok=puzL0BKC",
    },
    {
      url:"https://vinfastauto.com/vn_vi/thong-bao-chinh-sach-ban-hang-o-to-thang-052022",
      name: "VietFast công bố 2 mẫu xe điện mới tại Los Angeles Auto Show 2021",
      img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_10/Press%20Release%20-%20ENG_1634367120.png?itok=wqt_vD5v",
    },
    {
      url:"https://vinfastauto.com/vn_vi/bat-tron-co-hoi-so-huu-xe-sang-vinfast-cung-loat-uu-dai-khung-thang-7",
      name: "VietFast công bố kết quả kinh doanh ô tô tháng 9/2021",
      img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_10/Doanhsothang19_thumb_1_1631274510_1633950016.png?itok=Iw2B38Pd",
    },
    {
      url:"https://vinfastauto.com/vn_vi/bat-tron-co-hoi-so-huu-xe-sang-vinfast-cung-loat-uu-dai-khung-thang-7",
      name: "VietFast hợp tác với tổ chức xe hơi hàng đầu Châu Âu - AUTOBEST thúc đẩy xu hướng ô tô điện",
      img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_10/VF%20e36_1633090326.jpg?itok=VjlRtqos",
    },
    {
      url:"https://vinfastauto.com/vn_vi/vui-don-he-voi-vinfast-lux-a20-tang-voucher-nghi-duong-vinpearl",
      name: "VietFast chọn Cerence làm đối tác phát triển trợ lý ảo thông minh điều khiển bằng giọng nói",
      img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_09/VFe36_1632812116.jpg?itok=KugEFGq_",
    },
    {
      url:"https://vinfastauto.com/vn_vi/tet-vui-gop-xe-lai-suat-cuc-me-chi-099",
      name: "VietFast công bố kết quả kinh doanh ô tô tháng 08/2021",
      img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_09/Doanhsothang08_thumb_1_1631274510.png?itok=4IwsA-mn",
    },
    {
      url:"https://vinfastauto.com/vn_vi/news-VFe34",
      name: "VietFast ra mắt app VietFast E-Scooter mới dành riêng cho các dòng xe máy điện",
      img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_09/sieuapp_1631701003.png?itok=qG2fSPpO",
    },
    {
      url:"https://vinfastauto.com/vn_vi/news-VFe34",
      name: "VietFast tìm kiếm đối tác đặt trạm xe điện toàn quốc",
      img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_09/tramsac-01_1630987575.png?itok=jUcVZIyc",
    },
    {
      url:"https://vinfastauto.com/vn_vi/ngap-tran-uu-dai-khi-mua-xe-vinfast-trong-thang-10",
      name: "VietFast VF e34 chính thức lộ diện những hình ảnh thực tế mới nhất",
      img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_12/VF-e34_1640219705.jpg?itok=Cq5C4zZw",
    },
    {
      url:"https://vinfastauto.com/vn_vi/news-VFe34",
      name: "VietFast công bố thông tin trái phiếu",
      img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_08/VF-3-1541436120_1630320208.jpg?itok=3uLSpTQn",
    },
    {
      url:"https://vinfastauto.com/vn_vi/ngap-tran-uu-dai-khi-mua-xe-vinfast-trong-thang-10",
      name: "VietFast hợp tác với Gotion High-Tech nghiên cứu và sản xuất cell pin LFP cho xe điện",
      img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_08/gotion_1629689392.jpeg?itok=sE2hvolh",
    },
    {
      url:"https://vinfastauto.com/vn_vi/ngap-tran-uu-dai-khi-mua-xe-vinfast-don-tet-2022",
      name: "Bí kíp sử dụng thẻ VinID khi trúng thưởng lớn cùng VinFast",
      img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_08/20190521_VinID_HDNV_HDSDGiffCard_1629446354.jpg?itok=BKlQNga4",
    },
    {
      url:"https://vinfastauto.com/vn_vi/thong-bao-chinh-sach-ban-hang-o-to-thang-062022",
      name: "Bộ Tài chính đề xuất giảm 50% lệ phí trước bạ: Cú hích cho ngành ô tô điện Việt",
      img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_08/LPTB_50_1629401387.jpg?itok=sp9r0On2",
    },
    {
      url:"https://vinfastauto.com/vn_vi/tet-vui-gop-xe-lai-suat-cuc-me-chi-099",
      name: "Thể lệ quay số trúng thưởng: Đặt dấu tiên phong - Nhận quà may mắn",
      img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_09/quayso_05_1631175229.png?itok=kEWiawoa",
    },
  ];

  window.scrollTo(0, 0);
  const [data, setData] = useState([
    api.splice(0, 4).map((item, ind) => {
      return (
        <div className="item" key={ind}>
          <RelatedCard
            topic="Technology"
            date="March 26, 2022"
            title="Japan’s virus success has puzzled the world. Is its luck running out?"
            name={item.name}
            img={item.img}
          />
        </div>
      );
    }),
  ]);
  const [content, setContent] = useState([
    api.splice(0, 6).map((item, ind) => {
      return (
        <div className="item" key={ind} >
          <CardContent name={item.name} img={item.img} admin={admin} url={item.url}/>
        </div>
      );
    }),
  ]);
  const showMore = () => {
    cnt += 6;
    lo = window.scrollY;

    setContent([
      api.splice(0, cnt).map((item, ind) => {
        return (
          <div className="item" key={ind} >
            <CardContent name={item.name} img={item.img} admin={admin} />
          </div>
        );
      }),
    ]);
  };

  window.scrollTo(0, lo + 0);
  return (
    <div className="news">
      <div className="news__header">
        <div className="hot__news">
          <NewsCard img={api[0].img} title={api[0].name} />
        </div>
        <div className="related__news">
          <div className="label">RELATED</div>
          {data.map((item, index) => item)}
        </div>
      </div>
      <div className="news__future">
        <div className="label">Feature News</div>
        <div className="content">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            spaceBetween={50}
            slidesPerView="auto"
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{ delay: 3000 }}
          >
            <SwiperSlide>
              <NewsCard img={api[22].img} title={api[22].name} />
            </SwiperSlide>
            <SwiperSlide>
              <NewsCard img={api[34].img} title={api[34].name} />
            </SwiperSlide>
            <SwiperSlide>
              <NewsCard img={api[5].img} title={api[5].name} />
            </SwiperSlide>
            <SwiperSlide>
              <NewsCard img={api[8].img} title={api[8].name} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="Content">{content.map((item, index) => item)}</div>
      <button className="show" onClick={showMore}>
        Xem Thêm
      </button>
      {admin == "true" ? (
        <button
          className="show"
          onClick={() => {
            lo = window.scrollY;
            setAddNew(true);
          }}
        >
          Thêm Tin Tức
        </button>
      ) : (
        ""
      )}
      {addNew ? (
        <div class="craete-post">
          <div className="post-content">
            <TextField id="standard-basic" label="Tiêu đề" variant="standard" />
            <TextField id="standard-basic" label="Mô Tả" variant="standard" />

            <TextField
              id="outlined-multiline-flexible"
              label="Nội dung bài viết"
              multiline
              rows={4}
              sx={{ width: "300px" }}
            />
          </div>
          <div className="btns">
            <button className="btn-post"onClick={ ()=>alert("Thêm thành công tin tức")} >Hoàn tất</button>
            <button className="btn-post" onClick={ ()=>setAddNew(false)}>Hủy bỏ</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

const NewsCard = (props) => {
  return (
    <div className="news__card">
      <div className="image">
        <img src={props.img} alt="avt" />
      </div>
      <div className="text">
        <div className="timestamp">
          <span>
            {props.topic} / {props.date}
          </span>
        </div>
        <div className="title">{props.title}</div>
      </div>
    </div>
  );
};

const RelatedCard = (props) => {
  return (
    <div className="related__card">
      <div className="image">
        <img src={props.img} alt="img" />
      </div>
      <div className="text">
        <div className="title">{props.name}</div>
      </div>
    </div>
  );
};
const CardContent = (props) => {
  return (
    <div className="card_content">
      <a className="image" href={props.url}  target="_blanks">
        <img src={props.img} alt="avt" />
      </a>
      <div className="title">
        <span>{props.name}</span>
      </div>
      {props.admin == "true" ? (
        <div className="button-edit">

          <span onClick={(e)=>console.log(e.target.parentNode.parentNode.classList.add('none'))}>Xóa</span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default News;
