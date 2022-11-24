import React from 'react'
import MemberCard from '../../components/memberCard/MemberCard'
import './contact.scss'
import member1 from '../../images/thanh.png'
import member2 from '../../images/tien.jpg'
import member3 from "../../images/qa.jpg";
import member4 from "../../images/member4.jpg";
const memberList = [
  {
    avt: member1,
    name: "Nguyễn Phúc Thanh",
    khoa: "Khoa học máy tính",
    ID: "1915094",
    role: "Full Stack",
    fbURL: "",
    gitURL: "",
    instagramURL: "",
    twitterURL: "#",
    color:"success"
  },
  {
    avt: member4,
    name: "Làu Sâm Tường",
    khoa: "Kỹ thuật máy tính",
    ID: "2015007",
    role: "Full Stack",
    fbURL: "https://www.facebook.com/obs.tuongg",
    gitURL: "https://github.com/tuonghoccode",
    instagramURL: "https://www.instagram.com/tuong.lam1607/",
    twitterURL: "#",
    color:"error"
  },
  {
    avt: member3,
    name: "Phan Minh Quỳnh Anh",
    khoa: "Khoa học Ứng dụng",
    ID: "2012610",
    role: "Full Stack",
    fbURL: "",
    gitURL: "",
    instagramURL: "",
    twitterURL: "#",
    color:"secondary"
  },
  {
    avt: member2,
    name: "Nguyễn Kim Tiến",
    khoa: "Khoa học máy tính",
    ID: "2014721",
    role: "Full Stack",
    fbURL: "",
    gitURL: "",
    instagramURL: "",
    twitterURL: "#",
    color:"primary"
  },
];
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__header">IceTea_PigFashion</div>
      <div className="contact__content">
        {memberList.map((item, key) => (
          <div className="member" key={key}>
            <MemberCard
              src={item.avt}
              name={item.name}
              khoa={item.khoa}
              ID={item.ID}
              role={item.role}
              fbURL={item.fbURL}
              instagramURL={item.instagramURL}
              gitURL={item.gitURL}
              twitterURL={item.twitterURL}
              color={item.color}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact