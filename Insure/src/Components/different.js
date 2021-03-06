import React from 'react';
import { Divider } from 'antd';

import './different.css';
import snappy from './icon-snappy-process.svg';
import affordable from './icon-affordable-prices.svg';
import people from './icon-people-first.svg';

function Different() {
    return (
        <div className="different-main text-center text-sm-center text-md-center text-lg-left">
            <div className="w-35 align-middle text-center">
            <Divider className="different-div align-middle text-center"/>
            </div>
            <h2 className="different-text">We<span className="different-mark">'</span>re different</h2>
            <div class="row justify-content-sm-center">
                <div class="col-12 col-md-4 col-sm-12 text-center text-sm-center text-md-center text-lg-left">
                    <img src={snappy} alt="snappyprocess"></img>
                    <h4 className="different-head">Snappy process</h4>
                    <p className="different-sub">Our application process can be completed in minutes,not hours.Don't get stuck filling in tedious forms</p>
                </div>
                <div class="col-12 col-md-4 col-sm-12 text-center text-sm-center text-md-center text-lg-left">
                <img src={affordable} alt="affordableprices"/>    
                <h4 className="different-head">Afordable Prices</h4>
                    <p className="different-sub">We dont want you worrying about high monthly costs.Our prices may be low,but we still offer the best coverage possible</p>
                </div>
                <div class="col-12 col-md-4 col-sm-12 text-center text-sm-center text-md-center text-lg-left">
                    <img src={people} alt="peopleFirst"/>
                <h4 className="different-head">People First</h4>
                    <p className="different-sub">Our plans aren't full of conditions and clauses to prevent payouts.We make sure you're covered when you need it.</p>
                </div>
            </div>
        </div>
    );
}
export default Different;