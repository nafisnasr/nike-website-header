import React from 'react'
import { GoPlusCircle } from "react-icons/go";
import "./ShopBox.css"

export default function ShopBox({ price, title, img, children }) {
  return (
    <div className="shop-box">
      <span className="price">$<h5>{price}</h5></span>
      <div className="color-pallate">
        {children}
      </div>
      <section className="header-section">
        <img
          src={img}
          alt={title}
          className='container-fluid'
        />
        <p className="shop-title">{title}</p>
      </section>
      <section className='bottom-section'>
        <img src="./images/nike.png" alt="" />
        <GoPlusCircle className='add-icon' />
      </section>
    </div>
  )
}
