import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LogInFormContainer from './session_form/log_in_form_container';
import SignUpFormContainer from './session_form/sign_up_form_container';

const App = () => {
    return (
        <div>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        </div>
    );
};

export default App;