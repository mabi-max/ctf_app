import React from "react";
import './footer.css';
import digitechLogo from '../../assets/logo.svg';

const Footer = () => {
    return (
        <div className="digitech__footer section__padding">
            <div className="digitech__footer-heading">
                <h1 className="gradient__text">Are you seeking to embrace the future ahead of the curve?</h1>
            </div>

            <div className="digitech__footer-btn">
                <p className="btn btn-outline-secondary p-sm-3 remove__radius">Request Early Access</p>
            </div>

            <div className="digitech__footer-links">
                <div className="digitech__footer-links_logo">
                    <img src={digitechLogo} alt="logo" />
                    <p>Digitech, All Rights Reserved</p>
                </div>
                <div className="digitech__footer-links_div">
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>

                <div className="digitech__footer-links_div">
                    <h4>Company</h4>
                    <p>Terms an conditions</p>
                    <p>Privacy policy</p>
                    <p>Contact</p>
                </div>

                <div className="digitech__footer-links_div">
                    <h4>Get in touch</h4>
                    <p>Digitech</p>
                    <p>+234 701 030 3362</p>
                    <p>naanma77@gmail.com</p>
                </div>
            </div>
            <div className="digitech__footer-copyright">
                <p>© 2023 DigiTech. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;