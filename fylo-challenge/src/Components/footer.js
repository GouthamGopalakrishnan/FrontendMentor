import React from 'react';

import './footer.css';
import logo from '../Components/Images/logo.svg';
import location from '../Components/Images/icon-location.svg';
import mob from '../Components/Images/icon-phone.svg';
import mail from '../Components/Images/icon-email.svg';


function Footer() {
    return (
        <div className="footer-main-layout">
            <img src={logo} alt="logo" />
            <div className="row">
                <div className="col-12 col-sm-5">

                    <img src={location} className="footer-icons" alt="location" />
                    Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore et dolore magna aliqua

                </div>
                <div className="col-12 col-sm-3">
                    <img className="footer-icons"src={mob} alt="mobile" />
                    +1-543-123-4567 <br />

                    <img src={mail} className="footer-icons" alt="mobile" />
                    example@fylo.com
                </div>
                <div className="col-12 col-sm-2">
                    <p>About</p>
                    <p>Jobs</p>
                    <p>Press</p>
                    <p>Blog</p>
                </div>
                <div className="col-12 col-sm-2">
                    <p>Contact Us</p>
                    <p>Terms</p>
                    <p>Privacy</p>
                </div>
                <div className="col-12 col-sm-2">
                    <i className="fab fa-facebook-f pl-2"></i>
                    <i className="fab fa-twitter pl-2"></i>
                    <i className="fab fa-instagram pl-2"></i>
                </div>
            </div>
        </div>
    );
}
export default Footer;