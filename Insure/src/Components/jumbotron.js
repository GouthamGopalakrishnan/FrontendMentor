import React from 'react';
import { Divider } from 'antd';

import './jumbotron.css';
import People from './image-intro-desktop.jpg';



function Jumbotron() {
    return (
        <div className=" bg-violet">

            <div className="jumbotron" >
                <div class="d-flex ">
                    <div class="mr-auto ">
                        <Divider />
                        <h1 className="display-4 justify-content-start jumbotron-head pt-5" >Humanizing <br />your insurance.</h1>
                        <p className="lead justify-content-start jumbotron-text">Get your life coverage easier and faster.We blend our expertise and technology to help you find the plan that's right for you. Ensure you and your loved ones are protected.</p>
                        <p class="lead">
                            <a class="btn btn-primary btn-lg jumb-button" href="#" role="button">VIEW PLANS</a>
                        </p>
                        <p className="bg-property" />
                        
                    </div>

                    <div className=" jumbotron-secondary justify-content-end bg-property " >
                        
                        <img className="insure-people" src={People} alt="Insure people" ></img>


                    </div>

                </div>

            </div>

        </div>
    );
}
export default Jumbotron;

