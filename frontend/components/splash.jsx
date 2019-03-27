import React from 'react';
import Header from './header/header';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/session_actions';


class Splash extends React.Component{
    constructor(props) {
        super(props);
        this.demoLogin = this.demoLogin.bind(this);
    }
    
    demoLogin () {
        this.props.demoLogin({
            username: "Demo User",
            email: "demo_user@demo_email.com",
            password: "demo_password"
        });
    }

    render () {
        return (
            <>
            <Header loggedIn={false}/>
            <div className="splash-bg" style={{backgroundImage: `url(${window.splashBG})`}}></div>
            <div className="splash">
                <div className="session-container">
                    <h1 className="main-logo">grumblr</h1>
                    <p className="tag-line">For everything you love to hate</p>
                    <div className="button-register">
                        <Link to="/signup">Get Started</Link>
                    </div><br/>
                    <div className="button-login">
                        <Link to="/login" id="link-login">Log In</Link>
                    </div><br/>
                    <div className="button-demo" id="button-demo">
                        <a onClick={this.demoLogin}>Demo Login</a>
                    </div>
                </div>
            </div>
            </>
        );
    }
};

const mdp = dispatch => {
    return {
        demoLogin: user => dispatch(login(user))
    };
};

export default connect(null, mdp)(Splash);
