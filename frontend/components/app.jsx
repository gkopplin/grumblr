import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash';
import Dashboard from './dashboard';
import { Switch } from 'react-router-dom';
import LogInFormContainer from './session_form/log_in_form_container';
import SignUpFormContainer from './session_form/sign_up_form_container';
import PostModal from './posts/post_modal';
import Profile from './profile';

const App = () => {
    return (
        <div className="app">
            <PostModal />
            <Switch>
                <AuthRoute exact path="/" component={Splash} />
                <ProtectedRoute path="/dashboard" component={Dashboard} />
                <AuthRoute exact path="/login" component={LogInFormContainer} />
                <AuthRoute exact path="/signup" component={SignUpFormContainer} />
                <ProtectedRoute exact path="/users/:userId" component={Profile} />
            </Switch>
        </div>
    );
};

export default App;