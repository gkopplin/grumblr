import React from 'react';

import { Link, Route } from 'react-router-dom';
import {AuthRoute} from '../util/route_util';



const Splash = () => {
    return (
        <div className="splash">
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
        </div>
    );
};

export default Splash;