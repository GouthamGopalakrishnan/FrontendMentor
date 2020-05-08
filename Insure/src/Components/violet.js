import React from 'react';

import './violet.css';
import background from './bg-pattern-footer-desktop.svg';

// var violetStyle = {

//     backgroundImage: `url(${background})`
    

//   };

function Violet() {
    return (
        <div className="violet-main">
            <div class="row">
                <div className="col h4 violet-cont ">Find out more <br />about how we work</div>
                <div className="col violet-bg text-center"   >
                 
                <a className="btn btn-primary btn-lg " href="#" role="button">HOW WE WORK</a></div>

            </div>
        </div>    
    );
}
export default Violet;