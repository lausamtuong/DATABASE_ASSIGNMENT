import { Avatar } from '@nextui-org/react'
import React from 'react'
import './user-info.scss'
import { useSelector } from "react-redux";
import img from '../../images/bg.jpg'
const UserInfo = ({ user }) => {
  const admin = useSelector((state) => state?.auth?.login?.currentUser)

    return (
      <div className="user-info">
        <div className="user-info__img">
          <Avatar src={img} size='xl' color="secondary" bordered zoomed />
        </div>
        <div className="user-info__text">
          <span className='name'>{admin?.username}</span>
          <span className='role'>Admin</span>
        </div>
      </div>
    );
}

export default UserInfo
