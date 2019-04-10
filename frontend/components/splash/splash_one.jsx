import React from 'react';
import { Link } from 'react-router-dom';
import LogInFormContainer from '../session_form/log_in_form_container';
import SignUpFormContainer from '../session_form/sign_up_form_container';

export default props => {
    return (
        <div className={props.direction ? `splash-${props.direction}` : "splash-container"}>

            <div className="splash-bg" style={{ backgroundImage: `url(${window.splashBG})` }}></div>
            <div className="splash">
                <div className="session-container">
                    <h1 className="main-logo">grumblr</h1>
                    <p className="tag-line">For everything you love to hate</p>

                    { !props.formType && 
                        <>
                            <div className="button-register">
                                <Link to="/signup">Get Started</Link>
                            </div><br />
                            <div className="button-login">
                                <Link to="/login" id="link-login">Log In</Link>
                            </div><br />
                            <div className="button-demo" id="button-demo">
                                <a onClick={props.demoLogin}>Demo Login</a>
                            </div>
                        </>
                    }

                    {props.formType === "Log In" && 
                        <LogInFormContainer />
                    }

                    {props.formType === "Get Started" && 
                        <SignUpFormContainer />
                    }
                </div>
            </div>

        </div>
    );
};