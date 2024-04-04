import React, { useState } from 'react'
import './navbars.css'
import logo from './Logo.png'
import menuLogo from './icons8-menu.svg'
export default function Navbar() {
    const [burgermenu, setBurgermenu] = useState(false);
    
    
    const handleSideMenu = () => {
        let menunavbar = document.getElementById('navbar-hamburger-menu');
        if (!burgermenu) {
            menunavbar.style.display = 'block';
        }
        else {
            menunavbar.style.display = 'none';
        }
        setBurgermenu(!burgermenu);
    }
    return (
        <div className='navbar-main-body'>
            <div className="navbar-inner-main-body">
                <div className="navbar-logo">
                    <img src={logo} alt="" />
                </div>
                <div id="navbar-elements-container">
                    <div className="navbar-container-elements">About us</div>
                    <div className="navbar-container-elements">Feedback</div>
                    <div className="navbar-container-elements navbar-support">Support us</div>
                </div>
                <div className="navbar-hamburger">
                    <div className="navbar-hamburger-logo" onClick={handleSideMenu}>
                        <img src={menuLogo} alt="" />
                    </div>
                </div>
            </div>
            <div id="navbar-hamburger-menu">
                <div className="navbar-hamburger-menu-items">About us</div>
                <div className="navbar-hamburger-menu-items">Feedback</div>
                <div className="navbar-hamburger-menu-items">Support us</div>
            </div>
        </div>
    )
}

// components for a navbar
// Site logo
// About us
// Support us
// Feedback
