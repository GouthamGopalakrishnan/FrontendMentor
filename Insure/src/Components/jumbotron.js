import React from 'react';
import { Divider } from 'antd';

import './jumbotron.css';
import People from './image-intro-desktop.jpg';
import mobile from '../Components/images/image-intro-mobile.jpg';




function Jumbotron() {
    return (
        <div className=" bg-violet">
            <img className="insure-people d-block d-sm-none img-fluid" src={mobile} alt="Insure people" ></img>
            <div className="bg-violet-main">
            <div className="jumbotron " >
                <div class="row bg-leftpattern ">
                    <div class="col-12 col-md-6 col-sm-12 text-center text-sm-center text-md-left">
                        <Divider className="d-none d-sm-block"/>
                        <h1 className="display-4 justify-content-start jumbotron-head pt-5" >Humanizing <br />your insurance.</h1>
                        <p className="lead justify-content-start jumbotron-text">Get your life coverage easier and faster.We blend our expertise and technology to help you find the plan that's right for you. Ensure you and your loved ones are protected.</p>
                        <p class="lead">
                            <a class="btn btn-primary btn-lg jumb-button" href="#" role="button">VIEW PLANS</a>
                        </p>
                        <div className="bg-property" />
                    </div>
                    <div class="col-md-6 col-sm-12 col-md-push-6 ">
                        <div className=" d-none d-sm-block jumbotron-secondary justify-content-end bg-property " >

                            <img className="insure-people " src={People} alt="Insure people" ></img>


                        </div>
                    </div>
                </div>

            </div>

        </div>

         </div >
    );
}
export default Jumbotron;

