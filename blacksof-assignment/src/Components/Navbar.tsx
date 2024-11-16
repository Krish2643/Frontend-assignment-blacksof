import React from 'react'
import './Navbar.css'
import wifi from '../assets/Images/wifi.png'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className='navbar-container' >
       <div className='navbar-logo' >
        <img src={wifi} alt="" />
        <p>Smart Lights</p>
       </div>
       <div className='navbar-lists' >
        <p>Home</p>
        <p>Products</p>
        <p>Software Services</p>
        <button>Login</button>
       </div>
        <div className='navbar-hamburder' >
        <GiHamburgerMenu />
        </div>
    </div>
    
  )
}

export default Navbar