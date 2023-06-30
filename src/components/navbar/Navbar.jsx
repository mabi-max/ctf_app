import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import './navbar.css';
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';



function Navigation() {
  return (
    <nav className="navbar navbar-dark sticky-top" expand="lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <div>
            <div className="digitech__navbar-links_logo">
              DigiTech
            </div>
          </div>
        </a>

        <div className="d-flex">
          <p className="text-white m-1 d-none d-lg-block" type="button">
            Sign In
          </p>
          <button className="btn btn-danger me-2 d-none d-lg-block" type="button">
            Sign Up
          </button>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse custom-menu" id="collapsibleNavbar">
         
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                What is Digitech?
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                Open AI
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="logout.php">
                Case studies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="logout.php">
                Library
              </a>
            </li>
            <li>
              <div className='d-flex'>
            <p className="text-white m-2 d-lg-none" type="button">
            Sign In 
          </p>
          <button className="btn btn-danger me-2 d-lg-none" type="button">
            Sign Up
          </button>
           </div>
            </li>
          </ul>
        </div>

        
      </div>
    </nav>
  );
}



export default Navigation;
