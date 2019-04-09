import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
    return (
        <div className={props.animate ? `splash-${props.animate}` : "splash-container"}>

            <div className="splash-bg" style={{ backgroundImage: `url(${window.splashBG})` }}></div>
            <div className="splash">
                <div className="session-container">
                    <h1 className="main-logo">grumblr</h1>
                    <p className="tag-line">For everything you love to hate</p>
                    <div className="button-register">
                        <Link to="/signup">Get Started</Link>
                    </div><br />
                    <div className="button-login">
                        <Link to="/login" id="link-login">Log In</Link>
                    </div><br />
                    <div className="button-demo" id="button-demo">
                        <a onClick={props.demoLogin}>Demo Login</a>
                    </div>
                </div>
            </div>

        </div>
    );
};