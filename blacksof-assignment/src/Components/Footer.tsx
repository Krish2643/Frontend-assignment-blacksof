import React from 'react'
import './Footer.css'
import logo from '../assets/Images/wifi.png'

const Footer: React.FC = () => {
  return (
    <div className='footer-container' >
        <div className='footer-buttons' >
            <div className="footer-logo">
             <img src={logo} alt="logo-image" />
             <p>Smart Lights</p>
            </div>
            <div className="footer-links">
                <a href='#'>Product</a>
                <a href='#'>Software Services</a>
                <a href='#'>Follow Us</a>
            </div>
        </div>
        <div className='footer-details' >
           <div className='footer-details-border'></div>
           <div className='footer-details-links' ><p>Privacy Policy</p>| <p>Trems & Conditions</p>| <p>Cookie Policy</p></div>
        </div>
    </div>
  )
}

export default Footer