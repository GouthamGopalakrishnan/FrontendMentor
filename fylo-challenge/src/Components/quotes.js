import React from 'react';
import { Avatar } from 'antd';

import './quotes.css';
import satish from './Images/profile-1.jpg';
import bruce from './Images/profile-2.jpg';
import iva from './Images/profile-3.jpg';

function Quotes() {
    return (
        <div className="quotes-main-layout">
            <div class="quotes-row row">
                <div class="quotes-col col-12 col-sm w-100">
                    <p className="quotes-text">
                        Fylo has improved our team productivity by an order of magnitude.Since making the switch our team has become a well-oiled collaboration machine.
                    </p>
                    <div className="quote-foot row">
                        <div className="col-2 col-sm-2">
                            <img src={satish} alt="Avatar" className="avatar" />
                        </div>
                        <div className="col col-sm-5">
                            <h6 className="quote-name">Satish Patel</h6>
                            <p className="quote-pos">Founder & CEO,Huddle</p>
                        </div>
                    </div>


                </div>
                <div class=" quotes-col col-12 col-sm">
                    <p className="quotes-text">
                        Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
                    </p>
                    <div className="quote-foot row">
                        <div className="col-2 col-sm-2">
                            <img src={bruce} alt="Avatar" className="avatar" />
                        </div>
                        <div className="col col-sm-5">
                            <h6 className="quote-name">Bruce McKenzie</h6>
                            <p className="quote-pos">Founder & CEO,Huddle</p>
                        </div>
                    </div>
                </div>
                <div class="quotes-col col-12 col-sm">
                    <p className="quotes-text">
                        Fylo has improved our team productivity by an order of magnitude.Since making the switch our team has become a well-oiled collaboration machine.
                    </p>
                    <div className="quote-foot row">
                        <div className="col-2 col-sm-2">
                            <img src={iva} alt="Avatar" className="avatar" />
                        </div>
                        <div className=" col col-sm-5">
                            <h6 className="quote-name">Iva Boyd</h6>
                            <p className="quote-pos">Founder & CEO,Huddle</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Quotes;