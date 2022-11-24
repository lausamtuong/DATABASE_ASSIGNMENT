import React, { useEffect, useState } from 'react'
import './sidebar.scss'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import  Vinfast_logo from '../../images/Vinfast-logo.png'
import sidebarNav from '../../config/sidebarNav'
import {FcExport} from "react-icons/fc";
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../reduxToolkit/apiRequest'
const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const location = useLocation()
    const navigate= useNavigate()
    const dispatch = useDispatch()
   
    useEffect(() => {
        const temp = window.location.pathname.split('/')
        let size = (temp.length==2) ? 1 : temp.length;
        const curPath = window.location.pathname.split("/")[size-1];
        const activeItem = sidebarNav.findIndex(item => item.section === curPath)

        setActiveIndex(curPath.length === 0 ? 0 : activeItem)
    }, [location])
    const backtohome = () =>{
      navigate('/')
    }
    const closeSidebar = () => {
        document.querySelector('.main__content').style.transform = 'scale(1) translateX(0)'
        setTimeout(() => {
            document.body.classList.remove('sidebar-open')
            document.querySelector('.main__content').style = ''
        }, 500);
    }

    return (
      <div className="sidebar">
        <div className="sidebar__logo">
          <img src={Vinfast_logo} alt="logo" onClick={backtohome} />
          <div className="sidebar-close" onClick={closeSidebar}>
            <i className="bx bx-x"></i>
          </div>
        </div>
        <div className="sidebar__menu">
          {sidebarNav.map((nav, index) => (
            <Link
              to={nav.link}
              key={`nav-${index}`}
              className={`sidebar__menu__item ${
                activeIndex === index && "active"
              }`}
              onClick={closeSidebar}
            >
              <div className="sidebar__menu__item__icon">{nav.icon}</div>
              <div className="sidebar__menu__item__txt">{nav.text}</div>
            </Link>
          ))}
          <div className="sidebar__menu__item" onClick={()=>{ logoutUser(dispatch, navigate)}}>
            <div className="sidebar__menu__item__icon">
              <FcExport size={30}/>
            </div>
            <div className="sidebar__menu__item__txt" >Log out</div>
          </div>
        </div>
      </div>
    );
}

export default Sidebar
