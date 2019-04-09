import React from 'react';
import Header from '../header/header';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import {fetchFirstPost} from '../../actions/post_actions';
import SplashOne from './splash_one';
import SplashTwo from './splash_two';
import ScrollIcon from './scroll_icon';
import ScrollIconFilled from './scroll_icon_filled';

class Splash extends React.Component{
    constructor(props) {
        super(props);
        this.demoLogin = this.demoLogin.bind(this);
        this.scroll = this.scroll.bind(this);
        this.state = {
            currentSplash: 1,
            direction: null
        };
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

    scroll (e, currentSplash) {
        if (Number(e.target.id) < this.state.currentSplash) {
            this.setState({direction: "up" });
        } else {
            this.setState({direction: "down"});
        }
        this.setState({currentSplash});
    }

    render () {
        return (
            <>
            <Header loggedIn={false}/>

            <div className="splash-icons">

                {this.state.currentSplash === 1 ? (
                    <ScrollIconFilled />
                ) : (
                    <div onClick={e => this.scroll(e, 1)}>
                        <ScrollIcon id = {1} />
                    </div>
                )}
                {this.state.currentSplash === 2 ? (
                    <ScrollIconFilled id = {2} />
                ) : (
                    <div onClick={e => this.scroll(e, 2)}>
                        <ScrollIcon />
                    </div>
                )}
                {this.state.currentSplash === 3 ? (
                    <ScrollIconFilled />
                ) : (
                    <div onClick={e => this.scroll(e, 3)}>
                        <ScrollIcon id = {3} />
                    </div>
                )}

            </div>

            <SplashOne direction = {this.state.direction} 
                        demoLogin = {this.demoLogin}/>

            {this.props.firstPost &&
            <SplashTwo direction = {this.state.direction} 
                        demoLogin = {this.demoLogin}
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
