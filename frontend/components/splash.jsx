import React from 'react';
import Header from './header/header';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/session_actions';
import {fetchFirstPost} from '../actions/post_actions';
import NoLinkIcons from './posts/post_icons/no_link_icons';


class Splash extends React.Component{
    constructor(props) {
        super(props);
        this.demoLogin = this.demoLogin.bind(this);
        this.animate = this.animate.bind(this);
        this.state = {animate: false};
    }

    componentDidMount () {
        this.props.fetchFirstPost();
    }
    
    demoLogin () {
        this.props.demoLogin({
            username: "Demo User",
            email: "demo_user@demo_email.com",
            password: "demo_password"
        });
    }

    animate () {
        this.setState({animate: true});
    }

    render () {
        return (
            <>
            <Header loggedIn={false}/>
            <div className={this.state.animate ? "splash-animate" : "splash-container"}>

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
                        <button onClick={() => this.animate()}>animate</button>
                    </div>
                </div>

            </div>

            <div className={this.state.animate ? "splash-animate" : "splash-container"}>
                <div className="splash-bg" style={{ backgroundColor: "#001835"}}></div>
                <div className="splash">
                    <h1>You already know how this works.</h1>
                    <NoLinkIcons />
                </div>
            </div>
            </>
        );
    }
};

const msp = state => {
    return {
        firstPost: state.entities.post
    };
};

const mdp = dispatch => {
    return {
        fetchFirstPost: () => dispatch(fetchFirstPost()),
        demoLogin: user => dispatch(login(user))
    };
};

export default connect(msp, mdp)(Splash);
