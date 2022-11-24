import React from 'react'
import './topnav.scss'
import UserInfo from '../user-info/UserInfo'
import { FcMenu } from "react-icons/fc";
import { data } from '../../constants'

const TopNav = () => {
    const openSidebar = () => {
        document.body.classList.add('sidebar-open')
    }

    return (
        <div className='topnav'>
            <UserInfo user={data.user} />
            <div className="sidebar-toggle" onClick={openSidebar}>
                <FcMenu size={30}/>
            </div>
        </div>
    )
}

export default TopNav
