import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash';
import Dashboard from './dashboard';

const App = () => {
    return (
        <div>
            <AuthRoute exact path="/" component={Splash} />
            <ProtectedRoute path="/dashboard" component={Dashboard} />
        </div>
    );
};

export default App;