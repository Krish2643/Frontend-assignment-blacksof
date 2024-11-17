import React from 'react'
import './Products.css'
import product from '../assets/Images/product-image.png'
import arrow from '../assets/Images/icon_png.png'

const Products: React.FC = () => {

   const data = ['Centralized Control & Monitoring System', 'NEMA-Mounted VOLC 1160', 'Retrofit Street Light Controller VOLC 2160', 'Retrofit Street Light Controller VOLC 2180', 'Retrofit Street Light Controller VOLC 4180']

  return (
    <div className='products-container' >
        <div >
       <span className='products-container-heading' >Products</span>
       <p className='products-container-subheading' > <strong>Cutting-edge hardware,</strong> offerings helping cities optimize resources and achieve smart development goals</p>
       <div className='products-buttons'>
        {data.map((item)=> <p>{item}</p>)}
        </div>    
        <div className='products-list'>
            <div className='product-list-image' >
             <img src={product} alt="product-image" />
            </div>
            <div className='product-list-details' >
              <p className='product-list-number' >Products 1/5</p>
              <p className='product-list-title' >
              Centralized Control & Monitoring System
              </p>
              <p className='product-list-description' >Designed indigenously for street lighting projects, the CCMS offers a complete feeder panel for
              a group of 30-50 street lights.</p>
              <div className='product-list-know-more' >
                <p>Know More</p>
                <img src={arrow} alt="arrow icon" />
              </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Products