import React from 'react';

import { Link, Route } from 'react-router-dom';
import {AuthRoute} from '../util/route_util';



const Splash = () => {
    return (
        <div className="splash" style={{backgroundImage: `url(${window.splashBG})`}}>
            <div className="session-container">
                <h1 className="main-logo">grumblr</h1>
                <p className="tag-line">For everything you love to hate</p>
                <div className="button-register">
                    <Link to="/signup">Get Started</Link>
                </div><br />
                <div className="button-login" id="button-login">
                    <Link to="/login" id="link-login">Log In</Link>
                </div>
                
            </div>
        </div>
    );
};

export default Splash;