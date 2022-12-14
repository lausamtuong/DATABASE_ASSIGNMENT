import React from 'react'
import './main-layout.scss'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import TopNav from '../components/topnav/TopNav'

const MainLayout = () => {
    return (
        <>
            <Sidebar />
            <div className="main">
                <div className="main__content">
                    <TopNav />
                    <div className="space"></div>
                    <Outlet />
                   
                </div>
            </div>
        </>
    )
}

export default MainLayout
