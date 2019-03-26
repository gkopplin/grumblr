import React from 'react';
import LogInFormContainer from './session_form/log_in_form_container';
import SignUpFormContainer from './session_form/sign_up_form_container';
import { Link } from 'react-router-dom';

const Splash = () => {
    return (
        <div class="splash">
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        </div>
    );
};

export default Splash;