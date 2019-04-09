import React from 'react';
import Header from '../header/header';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import {fetchFirstPost} from '../../actions/post_actions';
import SplashOne from './splash_one';
import SplashTwo from './splash_two';

class Splash extends React.Component{
    constructor(props) {
        super(props);
        this.demoLogin = this.demoLogin.bind(this);
        this.scrollDown = this.scrollDown.bind(this);
        this.state = {animate: null};
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

    scrollDown () {
        this.setState({animate: "down"});
    }

    render () {
        return (
            <>
            <Header loggedIn={false}/>

            <SplashOne animate = {this.state.animate} 
                        demoLogin = {this.demoLogin}
                        scrollDown = {this.scrollDown} />

            {this.props.firstPost &&
            <SplashTwo animate = {this.state.animate} 
                        demoLogin = {this.demoLogin}
                        scrollDown = {this.scrollDown} 
                        firstPost = {this.props.firstPost}
                        author= {this.props.users[this.props.firstPost.author_id]}/>}
            
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
