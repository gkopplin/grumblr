import React from 'react';
import Header from './header/header';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/session_actions';
import {fetchFirstPost} from '../actions/post_actions';
import NoLinkIcons from './posts/post_icons/no_link_icons';
import NoLinkPost from './posts/no_link_post';

class Splash extends React.Component{
    constructor(props) {
        super(props);
        this.demoLogin = this.demoLogin.bind(this);
        this.animate = this.animate.bind(this);
        this.state = {animate: false};
    }

    componentDidMount () {
        this.props.fetchFirstPost(true);
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
                <div className="splash-2">
                    <div className="sample-post">
                        <NoLinkIcons />
                        {this.props.firstPost &&
                            <NoLinkPost post={this.props.firstPost}
                            author={this.props.users[this.props.firstPost.author_id]}/>
                        }
                    </div>
                    <div className="splash-text">
                        <h1>You already know how this works.</h1>
                        <p>When you follow someone, you'll see all of their
                            latest grumblings on your dashboard, just like you'd
                            expect. Like other people's complaints to let them 
                            know you share their frustration. Search for
                            users to follow to find your new favorite curmudgeon.
                        </p>
                    </div>
                    
                </div>
            </div>
            </>
        );
    }
};

const msp = state => {
    return {
        firstPost: Object.values(state.entities.posts)[0],
        users: state.entities.users 
    };
};

const mdp = dispatch => {
    return {
        fetchFirstPost: (splash) => dispatch(fetchFirstPost(splash)),
        demoLogin: user => dispatch(login(user))
    };
};

export default connect(msp, mdp)(Splash);
