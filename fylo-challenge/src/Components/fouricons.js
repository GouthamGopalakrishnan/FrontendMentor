import React from 'react';

import './fouricons.css';
import accessimage from './Images/icon-access-anywhere.svg';
import security from './Images/icon-security.svg';
import collaboration from './Images/icon-collaboration.svg';
import file from './Images/icon-any-file.svg';



function Fouricons() {
    return (
        <div className="fylo-fouricons-main">
            <div class="row">
                <div class=" second col-12 col-sm-6 text-center">
                    <img src={accessimage} alt="image" />
                    <h5 class=" fylo-four-head text-center">
                        Access your files,anywhere
                    </h5>
                    <p className="fylo-four-sub text-center ">
                        The ability to use a smartphone,tablet or computer to access your account means your files follow you everywhere.
                    </p>
                </div>
                <div class=" second col-12 col-sm-6 text-center ">
                    <img src={security} alt="image" />
                    <h5 class=" fylo-four-head text-center">
                        Security you can trust
                    </h5>
                    <p className="fylo-four-sub text-center">
                        2-factor authentication and user-controlled encryption are just a couple of the securty features we allow to help secure your files.
                    </p>
                </div>
                <div class="w-100"></div>
                <div class="second col-12 col-sm-6 text-center ">
                    <img src={collaboration} alt="image" />
                    <h5 class=" fylo-four-head text-center">
                        Real-time collaboration
                    </h5>
                    <p className=" fylo-four-sub text-center ">
                        Securely share files and folders with friends,family and colleagues for live collaboration.No email attachments required.
                    </p>
                </div>
                <div class="second col-12 col-sm-6 text-center ">
                    <img src={file} alt="image" />
                    <h5 class=" fylo-four-head text-center">
                        Store any type of file
                    </h5>
                    <p className="fylo-four-sub text-center">
                        Whether you're sharing holiday photos or work documents.Fylo has you covered allowing for all file types to besecurely stored and shared. 
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Fouricons;