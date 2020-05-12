import React from 'react';

import './productive.css';
import productive from './Images/illustration-stay-productive.png';
import linkicon from './Images/icon-arrow.svg';


function Productive() {
    return (
        <div className="Fylo-productive-main">
            <div class="row">
                <div class="col-12 col-sm">
                    <img src={productive} className="rounded mx-auto d-block img-fluid" alt="Stay Produvtive" />
                </div>
                <div class="col-12 col-sm fylo-col align-middle">
                    <h5 className="fylo-prod-head align-middle">
                        Stay productive,<br />wherever you are
                    </h5>
                    <p className="fylo-prod-sub">
                        Never let location be an issue when accessing your files.Fylo has you covered for all of your file storage needs.<br /><br />
                        Securely share files and folders with friends,family and colleagues for live collaboration.No email attachments required.
                     </p>
                    {/* <p className="fylo-prod-sub">
                        
                    </p> */}
                    <a className ="fylo-prod-link" href="#"  >
                        See how Fylo works <img src={linkicon} />
                        <hr/>

                    </a>
                </div>

            </div>

        </div>
    );
}

export default Productive;