import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProductList from "../../components/product-list/ProductList";
import "./product.scss";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import {
  filterProduct,
  getAllProduct,
  search,
} from "../../reduxToolkit/apiRequest";
import MenuItem from "@mui/material/MenuItem";
import { Input } from "@nextui-org/react";
const itemProduct =  [
        
  {
    illustration : "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2022/ao-thun-the-thao-dai-tay-recycle-active-den-1.jpg",
    illustration2: "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2022/ao-thun-the-thao-dai-tay-recycle-active-den-2.jpg",
    product_name: "Áo thun thể thao dài tay nam Recycle Active - Đen",
    category_id:"ABC",
    amount:10,
    sell_price: "199.000đ",
    discount: "",
    percent: "",
    product_id:'',
    stars: "4.9",
  },
  {
    illustration : "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2022/ao-hoodie-daily-wear-1-2.jpg",
    illustration2: "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2022/ao-hoodie-daily-wear-3-2.jpg",
    product_name: "Áo Hoodie nam Daily Wear (mũ trùm có dây rút) - Xanh Navy",
    category_id:"ABC",
    amount:10,
    sell_price: "349.000đ",
    discount: "399.000đ",
    percent: "-13%",
    product_id:'',
    stars: "4.9",
  },
  {
    illustration : "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/September2022/ao-khoac-mu-daily-wear-den-6.jpg",
    illustration2: "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/September2022/ao-khoac-mu-daily-wear-den-5.jpg",
    product_name: "Áo khoác nam có mũ Daily Wear - trượt nước, chống UV 99% - Đen",
    category_id:"ABC",
    amount:10,
    sell_price: "449.000đ",
    discount: "499.000đ",
    percent: "-10%",
    product_id:'',
    stars: "4.8",
  },
  {
    illustration : "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/September2022/ao-khoac-for-winter-den-3_29.jpg",
    illustration2: "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2022/ao-khoac-ni-for-winter-mau-den.jpg",
    product_name: "Áo khoác nỉ nam For Winter (có mũ trùm tiện lợi) - Đen",
    category_id:"ABC",
    amount:10,
    sell_price: "449.000đ",
    discount: "499.000đ",
    percent: "-10%",
    product_id:'',
    stars: "4.9",
  },
  {
    illustration : "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2022/ao-ni-dai-tay-lifewear-den-5_26.jpg",
    illustration2: "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2022/ao-ni-dai-tay-lifewear-den-1_78.jpg",
    product_name: "Áo nỉ dài tay Lifewear - thoải mái khi mặc - Đen",
    category_id:"ABC",
    amount:10,
    sell_price: "339.000đ",
    discount: "",
    percent: "",
    product_id:'',
    stars: "5",
  },
  {
    illustration : "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/September2022/modal-ultra-warm-den-1-1.jpg",
    illustration2: "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2022/ao-giu-nhiet-modal-mau-den.jpg",
    product_name: "Áo giữ nhiệt nam Modal Ultra Warm - mặc là ấm, thoáng khí - Đen",
    category_id:"ABC",
    amount:10,
    sell_price: "289.000đ",
    discount: "",
    percent: "",
    product_id:'',
    stars: "4.9",
  },
  {
    illustration : "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/August2022/_MG_2369-2_(1).jpg",
    illustration2: "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/February2022/NNjac22_46.jpg",
    product_name: "Áo khoác gió thể thao HeiQ ViroBlock, chống UV & trượt nước - Đen",
    category_id:"ABC",
    amount:10,
    sell_price: "449.000đ",
    discount: "499.000đ",
    percent: "-10%",
    product_id:'',
    stars: "4.8",
  },
  {
    illustration : "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/May2022/DSC04823_copy.jpg",
    illustration2: "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/April2022/uvspport_22.jpg",
    product_name: "Áo khoác gió thể thao đa năng cản gió và chống UV - Đen",
    category_id:"ABC",
    amount:10,
    sell_price: "449.000đ",
    discount: "499.000đ",
    percent: "-10%",
    product_id:'',
    stars: "4.7",
  },
  {
    illustration : "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/February2022/11-181.jpg",
    illustration2: "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/February2022/soronanavyu_32.jpg",
    product_name: "Quần nam Daily Pants - sợi Sorona, nhuộm Cleandye - Xanh Navy",
    category_id:"ABC",
    amount:10,
    sell_price: "299.000đ",
    discount: "",
    percent: "",
    product_id:'',
    stars: "",
  },
  {
    illustration : "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/September2022/jogger-casual-xam-nhat2_60.jpg",
    illustration2: "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2022/quan-ni-jogger-casual-xam.jpg",
    product_name: "Quần nỉ nam Jogger Casual co giãn - Xám nhạt",
    category_id:"ABC",
    amount:10,
    sell_price: "219.000đ",
    discount: "299.000đ",
    percent: "-27%",
    product_id:'',
    stars: "4.9",
  },
  {
    illustration : "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2022/ao-thun-the-thao-dai-tay-recycle-active-navy-1.jpg",
    illustration2: "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2022/ao-thun-the-thao-dai-tay-recycle-active-navy-2.jpg",
    product_name: "Áo thun thể thao dài tay nam Recycle Active - Xanh Navy",
    category_id:"ABC",
    amount:10,
    sell_price: "199.000đ",
    discount: "",
    percent: "",
    product_id:'',
    stars: "4.9",
  },
  {
    illustration : "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2022/ao-hoodie-den4_23.jpg",
    illustration2: "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2022/ao-hoodie-den5_54.jpg",
    product_name: "Áo Hoodie nam Daily Wear (mũ trùm có dây rút) - Đen",
    category_id:"ABC",
    amount:10,
    sell_price: "349.000đ",
    discount: "399.000đ",
    percent: "-13%",
    product_id:'',
    stars: "4.9",
  },
  {
    illustration : "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/September2022/ao-khoac-mu-daily-wear-xam-6_48.jpg",
    illustration2: "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/September2022/ao-khoac-mu-daily-wear-xam-7.jpg",
    product_name: "Áo khoác nam có mũ Daily Wear - trượt nước, chống UV 99% - Xám",
    category_id:"ABC",
    amount:10,
    sell_price: "449.000đ",
    discount: "499.000đ",
    percent: "-10%",
    product_id:'',
    stars: "4.8",
  },
  {
    illustration : "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/September2022/ao-khoac-for-winter-xam-dam-2.jpg",
    illustration2: "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/September2022/ao-khoac-for-winter-xam-dam-6.jpg",
    product_name: "Áo khoác nỉ nam For Winter (có mũ trùm tiện lợi) - Xám đậm",
    category_id:"ABC",
    amount:10,
    sell_price: "449.000đ",
    discount: "499.000đ",
    percent: "-10%",
    product_id:'',
    stars: "4.9",
  },
  {
    illustration : "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2022/ao-ni-dai-tay-lifewear-xam-dam-2.jpg",
    illustration2: "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2022/ao-ni-dai-tay-lifewear-xam-dam-1_59.jpg",
    product_name: "Áo nỉ dài tay Lifewear - thoải mái khi mặc - Xám đậm",
    category_id:"ABC",
    amount:10,
    sell_price: "339.000đ",
    discount: "",
    percent: "",
    product_id:'',
    stars: "5",
  },
  {
    illustration : "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/September2022/modal-ultra-warm-3_75.jpg",
    illustration2: "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2022/ao-giu-nhiet-modal-mau-xam.jpg",
    product_name: "Áo giữ nhiệt nam Modal Ultra Warm - mặc là ấm, thoáng khí - Xám",
    category_id:"ABC",
    amount:10,
    sell_price: "289.000đ",
    discount: "",
    percent: "",
    product_id:'',
    stars: "4.9",
  },
  {
    illustration : "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/September2022/kkasNNjac214.jpg",
    illustration2: "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/February2022/NNjac213.jpg",
    product_name: "Áo khoác gió thể thao HeiQ ViroBlock, chống UV & trượt nước - Xanh Navy",
    category_id:"ABC",
    amount:10,
    sell_price: "449.000đ",
    discount: "499.000đ",
    percent: "-10%",
    product_id:'',
    stars: "4.8",
  },
  {
    illustration : "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/April2022/DSC04823.jpg",
    illustration2: "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/April2022/DSC04876.jpg",
    product_name: "Áo khoác gió thể thao đa năng cản gió và chống UV - Xanh rêu",
    category_id:"ABC",
    amount:10,
    sell_price: "449.000đ",
    discount: "499.000đ",
    percent: "-10%",
    product_id:'',
    stars: "4.7",
  },
  {
    illustration : "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/February2022/soronada112.jpg",
    illustration2: "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/February2022/uxamsoro_copy.jpg",
    product_name: "Quần nam Daily Pants - sợi Sorona, nhuộm Cleandye - Xám xanh",
    category_id:"ABC",
    amount:10,
    sell_price: "299.000đ",
    discount: "",
    percent: "",
    product_id:'',
    stars: "",
  },
  {
    illustration : "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2022/ao-thun-the-thao-dai-tay-recycle-active-xam-dam-1.jpg",
    illustration2: "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2022/ao-thun-the-thao-dai-tay-recycle-active-xam-dam-2.jpg",
    product_name: "Áo thun thể thao dài tay nam Recycle Active - Xám đậm",
    category_id:"ABC",
    amount:10,
    sell_price: "199.000đ",
    discount: "",
    percent: "",
    product_id:'',
    stars: "4.9",
  },
  {
    illustration : "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/September2022/ao-khoac-for-winter-xam-nhat-2.jpg",
    illustration2: "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/September2022/ao-khoac-for-winter-xam-nhat-3.jpg",
    product_name: "Áo khoác nỉ nam For Winter (có mũ trùm tiện lợi) - Xám nhạt",
    category_id:"ABC",
    amount:10,
    sell_price: "449.000đ",
    discount: "499.000đ",
    percent: "-10%",
    product_id:'',
    stars: "4.9",
  },
  {
    illustration : "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2022/ao-ni-dai-tay-lifewear-xam-nhat-8.jpg",
    illustration2: "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2022/ao-ni-dai-tay-lifewear-xam-nhat-99_2.jpg",
    product_name: "Áo nỉ dài tay Lifewear - thoải mái khi mặc - Xám nhạt",
    category_id:"ABC",
    amount:10,
    sell_price: "339.000đ",
    discount: "",
    percent: "",
    product_id:'',
    stars: "5",
  },
  {
    illustration : "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/September2022/heiQ_reu_xam_xanh_2.jpg",
    illustration2: "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/September2022/heiQ_reu_xam_xanh_1.jpg",
    product_name: "Áo khoác gió thể thao HeiQ ViroBlock, chống UV & trượt nước - Xám xanh",
    category_id:"ABC",
    amount:10,
    sell_price: "449.000đ",
    discount: "499.000đ",
    percent: "-10%",
    product_id:'',
    stars: "4.8",
  },
  {
    illustration : "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/February2022/soronada132.jpg",
    illustration2: "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/February2022/udensoro_copy.jpg",
    product_name: "Quần nam Daily Pants - sợi Sorona, nhuộm Cleandye - Đen",
    category_id:"ABC",
    amount:10,
    sell_price: "299.000đ",
    discount: "",
    percent: "",
    product_id:'',
    stars: "",
  },
  {
    illustration : "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2022/ao-thun-the-thao-dai-tay-recycle-active-xanh-reu-1.jpg",
    illustration2: "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2022/ao-thun-the-thao-dai-tay-recycle-active-xanh-reu-2.jpg",
    product_name: "Áo thun thể thao dài tay nam Recycle Active - Xanh rêu",
    category_id:"ABC",
    amount:10,
    sell_price: "199.000đ",
    discount: "",
    percent: "",
    product_id:'',
    stars: "4.9",
  },
  {
    illustration : "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/September2022/ao-khoac-for-winter-xanh-reu-3_36.jpg",
    illustration2: "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2022/ao-khoac-ni-for-winter-mau-reu.jpg",
    product_name: "Áo khoác nỉ nam For Winter (có mũ trùm tiện lợi) - Xanh rêu",
    category_id:"ABC",
    amount:10,
    sell_price: "449.000đ",
    discount: "499.000đ",
    percent: "-10%",
    product_id:'',
    stars: "4.9",
  },
  {
    illustration : "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2022/ao-ni-dai-tay-lifewear-xanh-reu-6_53.jpg",
    illustration2: "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2022/ao-ni-dai-tay-lifewear-xanh-reu-1_91.jpg",
    product_name: "Áo nỉ dài tay Lifewear - thoải mái khi mặc - Xanh rêu",
    category_id:"ABC",
    amount:10,
    sell_price: "339.000đ",
    discount: "",
    percent: "",
    product_id:'',
    stars: "5",
  },
  {
    illustration : "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/September2022/heiQ_reu_new_2.jpg",
    illustration2: "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/September2022/heiQ_reu_new_1.jpg",
    product_name: "Áo khoác gió thể thao HeiQ ViroBlock, chống UV & trượt nước - Xanh rêu",
    category_id:"ABC",
    amount:10,
    sell_price: "449.000đ",
    discount: "499.000đ",
    percent: "-10%",
    product_id:'',
    stars: "4.8",
  },
  {
    illustration : "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2022/combo-ao-life-wear-quan-ni-jogger-casual-xam-2.jpg",
    illustration2: "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2022/combo-ao-life-wear-quan-ni-jogger-casual-xam-2_4.jpg",
    product_name: "Bộ nỉ nam Casual - thoải mái khi mặc",
    category_id:"ABC",
    amount:10,
    sell_price: "539.000đ",
    discount: "638.000đ",
    percent: "-16%",
    product_id:'',
    stars: "0",
  },
  {
    illustration : "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/July2022/1234231.jpg",
    illustration2: "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/November2021/BOY_7738-copy.jpg",
    product_name: "Quần thể thao Jogger co giãn - Xám nhạt",
    category_id:"ABC",
    amount:10,
    sell_price: "289.000đ",
    discount: "",
    percent: "",
    product_id:'',
    stars: "4.7",
  },
  {
    illustration : "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/July2022/12342311.jpg",
    illustration2: "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/February2022/IMG_6966-copys.jpg",
    product_name: "Quần thể thao Jogger co giãn - Đen",
    category_id:"ABC",
    amount:10,
    sell_price: "289.000đ",
    discount: "",
    percent: "",
    product_id:'',
    stars: "4.7",
  },
  {
    illustration : "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2022/combo-ao-dai-tay-recycle-active-den-quan-jogger-graphene-den-4_47.jpg",
    illustration2: "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2022/combo-ao-dai-tay-recycle-active-xanh-reu-quan-jogger-graphene-den-4_7.jpg",
    product_name: "Set đồ thể thao Warm Winter - Năng động thoải mái",
    category_id:"ABC",
    amount:10,
    sell_price: "399.000đ",
    discount: "538.000đ",
    percent: "-26%",
    product_id:'',
    stars: "0",
  },
  {
    illustration : "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/June2022/graphenee.jpg",
    illustration2: "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/May2022/graphene_thumb.jpg",
    product_name: "Quần Jogger thể thao co giãn Graphene - Đen",
    category_id:"ABC",
    amount:10,
    sell_price: "339.000đ",
    discount: "",
    percent: "",
    product_id:'',
    stars: "4.7",
  },
  {
    illustration : "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2022/Ghi_truoc.jpg",
    illustration2: "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/March2022/deggraphen-xam_copy.jpg",
    product_name: "Quần Jogger thể thao co giãn Graphene - Xám",
    category_id:"ABC",
    amount:10,
    sell_price: "339.000đ",
    discount: "",
    percent: "",
    product_id:'',
    stars: "4.7",
  },
  {
    illustration : "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2022/anh-2D-ao-thun-dai-tay-cotton-compact-xam-dam-8_13.jpg",
    illustration2: "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2022/anh-chi-tiet-ao-thun-dai-tay-cotton-compact-xam-dam-3_30.jpg",
    product_name: "Áo thun nam dài tay Cotton Compact V2 - Xám đậm",
    category_id:"ABC",
    amount:10,
    sell_price: "269.000đ",
    discount: "",
    percent: "",
    product_id:'',
    stars: "4.8",
  },
  {
    illustration : "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/September2022/ao-dai-tay-compact-v2-xam2.jpg",
    illustration2: "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/September2022/ao-dai-tay-compact-v2-xam3.jpg",
    product_name: "Áo thun nam dài tay Cotton Compact V2 - Xám",
    category_id:"ABC",
    amount:10,
    sell_price: "269.000đ",
    discount: "",
    percent: "",
    product_id:'',
    stars: "4.8",
  },
  {
    illustration : "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/September2022/ao-dai-tay-compact-v2-reu2_70.jpg",
    illustration2: "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/September2022/ao-dai-tay-compact-v2-reu4.jpg",
    product_name: "Áo thun nam dài tay Cotton Compact V2 - Rêu",
    category_id:"ABC",
    amount:10,
    sell_price: "269.000đ",
    discount: "",
    percent: "",
    product_id:'',
    stars: "4.8",
  },
  {
    illustration : "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/September2022/ao-dai-tay-compact-v2-navy2.jpg",
    illustration2: "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/September2022/ao-dai-tay-compact-v2-navy3.jpg",
    product_name: "Áo thun nam dài tay Cotton Compact V2 - Xanh Navy",
    category_id:"ABC",
    amount:10,
    sell_price: "269.000đ",
    discount: "",
    percent: "",
    product_id:'',
    stars: "4.8",
  },
  {
    illustration : "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/September2022/ao-dai-tay-compact-v2-trang3.jpg",
    illustration2: "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/September2022/ao-dai-tay-compact-v2-trang2.jpg",
    product_name: "Áo thun nam dài tay Cotton Compact V2 - Trắng",
    category_id:"ABC",
    amount:10,
    sell_price: "269.000đ",
    discount: "",
    percent: "",
    product_id:'',
    stars: "4.8",
  },
  {
    illustration : "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/September2022/ao-dai-tay-compact-v2-den2.jpg",
    illustration2: "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/September2022/ao-dai-tay-compact-v2-den3.jpg",
    product_name: "Áo thun nam dài tay Cotton Compact V2 - Đen",
    category_id:"ABC",
    amount:10,
    sell_price: "269.000đ",
    discount: "",
    percent: "",
    product_id:'',
    stars: "4.8",
  },

]
const Product = () => {
  //const APIProduct = useSelector((state) => state.auth.API.ALL);
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    setLoading(true);
    const temp = await getAllProduct();
    setList(temp);
    setLoading(false);
    window.scrollTo(0, 0);
  }, []);
  const inputHandler = async (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
    const temp = await search(lowerCase);
    setList(temp);
  };

  var type_;
  const checkHandle = async (e) => {
    type_= e.target.getAttribute("type") + "";
    const temp = await filterProduct(type_);
    setList(temp);
  };
  return (
    <>
      <div className="product" style={{ overflow: "hidden" }}>
        <div className="product__banner">
          <div class="site-collections-filter">
            <div class="site-collections-filter__items ">
              <span>
                <img
                  src="https://mcdn.coolmate.me/image/October2022/mceclip2_22.png"
                  onClick={checkHandle}
                  id="CAT0005 "
                  alt=""
                  type="SHIRT"
                />
              </span>
            </div>
            <div class="site-collections-filter__items ">
              <span>
                <img
                  src="https://mcdn.coolmate.me/image/July2022/mceclip0_35.png"
                  alt=""
                  onClick={checkHandle}
                  id="CAT0001"
                  type="SHIRT"
                />
              </span>
            </div>
            <div class="site-collections-filter__items ">
              <span>
                <img
                  src="https://mcdn.coolmate.me/image/July2022/mceclip1_79.png"
                  alt=""
                  onClick={checkHandle}
                  id="CAT0004"
                  type="SHIRT"
                />
              </span>
            </div>
            <div class="site-collections-filter__items sizeNho">
              <span>
                <img
                  src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F12%2Fnike-dunk-low-viotech-closer-look-release-information-CT5050-500-00.jpg?w=960&cbr=1&q=90&fit=max"
                  alt=""
                  onClick={checkHandle}
                  id="CAT0002 "
                  type="SHOSE"
                  
                />
              </span>
            </div>
            <div class="site-collections-filter__items ">
              <span>
                <img
                  src="https://mcdn.coolmate.me/image/July2022/mceclip4_40.png"
                  alt=""
                  onClick={checkHandle}
                  id="CAT0006 "
                  type="TROUSER"
                />
              </span>
            </div>
            <div class="site-collections-filter__items ">
              <span>
                <img
                  src="https://mcdn.coolmate.me/image/July2022/mceclip2_97.png"
                  alt=""
                  onClick={checkHandle}
                  id="CAT0003"
                  type="PANT"
                />
              </span>
            </div>
          </div>
        </div>
        <div class="collections-filter">
          <div class="containerr container--full">
            <div class="collections-filter__wrapper">
              <div class="collections-filter__inner">
                <h2 class="collections-filter__heading">Sản phẩm</h2>
              </div>{" "}
              <Input placeholder="Search" onChange={inputHandler} />
            </div>
          </div>
        </div>
        <div className="product__title">sản phẩm bán chạy</div>
        <div className="product__main">
          <div className="product__list">
            <ProductList list={list} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
