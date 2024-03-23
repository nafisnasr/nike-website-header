import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import "./Navbar.css"
import NavItem from '../NavItem/NavItem';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg" id='navbar'>
            <div className="container p-2">
                <div className="navbar-brand">
                    <div className="brand-text">
                        <span>Shoes</span>
                        <span>Comm</span>
                    </div>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <NavItem title="Home" />
                        <NavItem title="About" />
                        <NavItem title="Contact" />
                        <NavItem title="Shop" />
                        <NavItem title="Shoes" />
                    </ul>
                    <div className="right-container">
                        <button className="sign-in-btn" >Sign in</button>
                        <div className="shopping-cart-box">
                            <FiShoppingCart className='icon' />
                            <div className="notification">1</div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>)
}
