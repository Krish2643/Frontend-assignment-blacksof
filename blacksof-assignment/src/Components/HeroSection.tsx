import React from 'react'
import './HeroSection.css'

const HeroSection: React.FC = () => {
  return (
    <div className='hero-section-container'>
      <p className='hero-section-heading' >Smart Lighting Solutions</p>
      <div className='hero-section-subheading-container' >
      <p className='hero-section-subheading'>Bringing A New Perspective To Street Lights And The Cities Of Tomorrow.</p>
      </div>
      <button className='hero-section-button' >Login</button>
    </div>
  )
}

export default HeroSection