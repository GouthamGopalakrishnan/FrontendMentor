import React from 'react';

import logo from './logo.svg';
import './navbar.css';


function Navbar() {
    return (
        <div className="navbar-main">
            <nav class="navbar navbar-expand-lg navbar-light bg-white">
                <a class="navbar-brand" href="#"><img src={logo} alt="insure"/></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <span class="navbar-toggler-icon2"></span> */}
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ">
                            <a className="nav-link" href="#">HOW WE WORK </a>
                        </li>
                        <li class="nav-item pl-sm-4">
                            <a class="nav-link" href="#">BLOG</a>
                        </li>
                        <li class="nav-item pl-sm-4">
                            <a class="nav-link" href="#">ACCOUNT</a>
                        </li>
                        <li class="nav-item pl-sm-4 active">
                            <a class="nav-link" href="#">VIEW PLANS</a>
                        </li>

                    </ul>
                </div>
            </nav>

        </div>
    );

}
export default Navbar;