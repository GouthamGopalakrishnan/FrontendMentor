import React from 'react';

import './navbar.css';
import logo from '../Components/Images/logo.svg';
import mobilelogo from '../Components/Images/icon-phone.svg';

function FyloNavbar() {
    return (
        <div className="fylo-nav-main ">
            <nav className="navbar navbar-expand  ">
                <a className="navbar-brand " href="#">
                    <img className=" fylo-dt-logo " src={logo} alt="logo" />
                    {/* <img className="fylo-mb-logod-block d-sm-none w-75" src={logo} alt="logo" /> */}
                </a>
                {/* <div className="collapse navbar-collapse " id="navbarNav"> */}
                <ul className="fylo-nav-tabs navbar-nav text-nowrap align-items-center">
                    <li>
                    <a className="nav-link" href="#">Features <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link" href="#">Team </a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link" href="#">Sign In</a>
                    </li>


                </ul>
                {/* <ul className="fylo-nav-mobtabs navbar-nav ml-auto align-items-center d-block d-sm-none">
                            <a className="nav-link" href="#">Features <span className="sr-only">(current)</span></a>
                        <li className="nav-item active ">
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sign In</a>
                        </li>


                    </ul> */}
                {/* </div> */}
            </nav>

        </div>
    );
}

export default FyloNavbar;