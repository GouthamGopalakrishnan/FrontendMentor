import React from 'react';

import './secondary.css';
import peopleimage from '../Components/Images/illustration-intro.png';


function Secondary() {
  return (
    <div className="fylo-secondary-main">
        <div className="fylo-sec-image">
            <img src={peopleimage} className="rounded mx-auto d-block img-fluid" alt="Fylo image" />
        </div>
        <div className="fylo-sec-text text-center">
        <p class="text-center">
            All your files in one secure location, <br />
            accessible anywhere.
        </p>
        <p class=" fylo-sec-subtext text-center">
            Fylo stores all your most important files in one secure location.<br />Access them wherever you need,share and collaborate with<br /> friends,family and co-workers 
            
        </p>
        <button type="button" class="btn btn-primary btn-lg text-center">Get Started</button>
        </div>


    </div>
  );
}

export default Secondary;