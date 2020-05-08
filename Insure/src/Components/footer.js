import React from 'react';
import { Divider } from 'antd';

import './footer.css';
import logo from './logo.svg';





function Footer() {
    return (
        <div className="footer-main">

            <div class="d-flex">
                <div class="mr-auto p-2 font-awesome" >
                    <img src={logo} alt="insure" />
                </div>
                <div className="p-2 footer-links">
                    <a href="#" className="pl-3" >
                        <i class="fab fa-facebook-square "></i>
                    </a>
                    <a href="#" className="pl-3" >
                        <i class="fab fa-twitter fa-lg"></i>
                    </a>
                    <a href="#" className="pl-3" >
                        <i class="fab fa-pinterest fa-lg"></i>
                    </a>
                    <a href="#" className="pl-3" >
                        <i class="fab fa-instagram fa-lg"></i>
                    </a>
                </div>


            </div>
            <Divider />
            <div class="row">
                <div class="col">
                    <h5 className="footer-head">OUR COMPANY</h5>
                    <a ><p className="footer-sub pt-3">HOW WE WORK </p></a>
                    <a ><p className="footer-sub">WHY INSURE</p></a>
                    <a > <p className="footer-sub">VIEW PLANS</p></a>
                    <a ><p className="footer-sub">REVIEWS</p></a>
                </div>
                <div class="col">
                    <h5 className="footer-head">HELP ME</h5>
                    <a ><p className="footer-sub pt-3">FAQ</p></a>
                    <a ><p className="footer-sub">TERMS OF USE</p></a>
                    <a > <p className="footer-sub">PRIVACY POLICY</p></a>
                    <a ><p className="footer-sub">COOKIES</p></a>
                </div>
                <div class="col">
                    <a ><h5 className="footer-head">CONTACT</h5></a>
                    <a ><p className="footer-sub pt-3">SALES</p></a>
                    <a ><p className="footer-sub">SUPPORT</p></a>
                    <a ><p className="footer-sub">LIVE CHAT</p></a>
                </div>
                <div class="col">
                    <h5 className="footer-head">OTHERS</h5>
                    <a ><p className="footer-sub pt-3">CAREERS</p></a>
                    <a ><p className="footer-sub">PRESS</p></a>
                    <a ><p className="footer-sub">LICENSES</p></a>
                </div>
            </div>
        </div>
    );
}
export default Footer;