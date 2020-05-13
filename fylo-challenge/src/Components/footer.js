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
            <div className="row mt-5">
                <div className="location col-12 col-sm-4">
                    <div className="row">
                        <div className="col-1 col-sm-1">
                            <img src={location} className="footer-icons pt-2" alt="location" />

                        </div>
                        <div className="col-11 pl-0">
                            <p className="foot-loc">Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore  magna aliqua</p>

                        </div>
                    </div>



                </div>
                <div className="footer-mail col-12 col-sm-2">
                    <table>
                        <tr>
                            <td>
                                <img className="footer-icons" src={mob} alt="mobile" />
                            </td>
                            <td className="pl-2">
                            +1-543-123-4567

                            </td>
                        </tr>
                        <tr className="pt-5">
                            <td>
                                <img src={mail} className="footer-icons pt-3" alt="mobile" />
                            </td>
                            <td className="pt-3 pl-2" >
                                example@fylo.com
                            </td>
                        </tr>
                        
                    </table>
                </div>
                <div className="col-12 col-sm-2 pl-sm-5 ">
                    <p>About Us</p>
                    <p>Jobs</p>
                    <p>Press</p>
                    <p>Blog</p>
                </div>
                <div className="col-12 col-sm-2">
                    <p>Contact Us</p>
                    <p>Terms</p>
                    <p>Privacy</p>
                </div>
                <div className="col-12 col-sm-2 footer-links justify-content-center">
                    <span class="dot justify-content-center ml-3"><i class="fab fa-facebook-f"></i></span>
                    <span class="dot justify-content-center ml-3"><i className="fab fa-twitter"></i></span>
                    <span class="dot justify-content-center ml-3"><i className="fab fa-instagram pl-2"></i></span>
                </div>
            </div>
        </div>
    );
}
export default Footer;