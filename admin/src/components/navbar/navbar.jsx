import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.jpg'
import profile from '../../assets/profile.png'
const Navbar =()=>{
    return(
        <div className='navbar'>
            <img src={logo} alt="" className="logo"/>
            <p>Admin Pannel</p>
            <img src={profile} className="profile"/>
        </div>

    )
}

export default Navbar