import React from 'react';

import './early.css';


function Early() {
    return (
        <div className="early-layout-main">
            <div className="row  justify-content-sm-center justify-content-center">
                <div className="col-10 early-col col-sm-7 text-center">
                    <h2 className="early-head">Get early access today</h2>
                    <p className="pt-3">It only takes a minute to sign up and our free starter tier is extremely generous.If you have any questions,our support team would be happy to help you.

                    </p>
                    <div class="input-group early-input mb-3">
                        <input type="text" class="form-control" placeholder="email@example.com" aria-label="email@example.com" aria-describedby="button-addon2"/>
                            <div class="input-group-append ">
                                <button class="btn btn-outline-secondary ml-sm-3" type="button" id="button-addon2">Get Started For Free</button>
                            </div>
</div>
                    </div>
                </div>
            </div>
    );
}
export default Early;