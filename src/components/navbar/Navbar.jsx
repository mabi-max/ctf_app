import React from "react";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Navbar = () => {
    return (
        <div className="digitech__navbar">
            <div className="digitech__navbar-links">
                <div className="digitech__navbar-links-logo">
                   <img src={logo} alt="logo"/>
                </div>
                <div className="digitech__navbar-links-container">
                    <p><a href="#home">Home</a></p>
                    <p><a href="#wdgt">What is DigiTech</a></p>
                    <p><a href="#possibility">Open AI</a></p>
                    <p><a href="#features">Case studies</a></p>
                    <p><a href="#Library">Library</a></p>
                </div>
            </div>
            <div className="digitech__navbar-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div>
        </div>
    )
}

export default Navbar;