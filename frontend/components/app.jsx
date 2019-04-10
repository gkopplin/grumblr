import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash/splash';
import Dashboard from './dashboard';
import { Switch } from 'react-router-dom';
import PostModal from './posts/post_modal';
import Modal from './modal';
import Profile from './profile';
import Likes from './likes';
import Following from './following';
import Followers from './followers';

const App = () => {
    return (
        <div className="app">
            <PostModal />
            <Modal />
            <Switch>
                <AuthRoute exact path="/" component={Splash} />
                <ProtectedRoute path="/dashboard" component={Dashboard} />
                <ProtectedRoute path="/likes" component={Likes} />
                <ProtectedRoute path="/following" component={Following} />
                <ProtectedRoute path="/followers" component={Followers} />
                <AuthRoute exact path="/login" component={Splash} formType = {"Log In"}/>
                <AuthRoute exact path="/signup" component={Splash} formType={"Get Started"}/>
                <ProtectedRoute exact path="/users/:userId" component={Profile} />
            </Switch>
        </div>
    );
};

export default App;