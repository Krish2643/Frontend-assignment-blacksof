import React, { useState } from 'react'
import './Navbar.css'
import wifi from '../assets/Images/wifi.png'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar: React.FC = () => {

   const [visible, setVisible] = useState<boolean>(false);

   const handleClick = ():void=>{
    setVisible(!visible);
   }

  return (
    <div className='navbar'  >
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
        <div className='navbar-hamburder' onClick={()=>handleClick()} >
        <GiHamburgerMenu/>
        </div>
    </div>
    {visible && <div className='navbar-mobile-list-visible' >
        <p>Home</p>
        <p>Products</p>
        <p>Software Services</p>
        <p>Login</p>
      </div>}
    </div>
    
  )
}

export default Navbar