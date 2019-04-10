import React from 'react';
import Header from '../header/header';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import {fetchFirstPost} from '../../actions/post_actions';
import SplashOne from './splash_one';
import SplashTwo from './splash_two';
import SplashThree from './splash_three';
import ScrollIconContainer from './scroll_icon_container';

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
            if (this.state.currentSplash === 2) {
                this.setState({direction: "up2-1" });
            } else if (e.target.id === "1") {
                this.setState({direction: "up3-1" });
            } else {
                this.setState({direction: "up3-2" });
            }
        } else {
            if (this.state.currentSplash === 2) {
                this.setState({direction: "down2-3" });
            } else if (e.target.id === "3") {
                this.setState({ direction: "down1-3" });
            } else {
                this.setState({direction: "down1-2" });
            }
        }
        this.setState({currentSplash});
    }

    render () {
        return (
            <div className="full-splash">
            <Header loggedIn={false}/>

            <div className="splash-icons">
                <ScrollIconContainer currentSplash = {this.state.currentSplash}
                                        number = {1}
                                        scroll = {this.scroll}/>

                <ScrollIconContainer currentSplash = {this.state.currentSplash}
                                        number = {2}
                                        scroll = {this.scroll}/>

                <ScrollIconContainer currentSplash = {this.state.currentSplash}
                                        number = {3}
                                        scroll = {this.scroll}/>
            </div>

            <SplashOne direction = {this.state.direction} 
                        demoLogin = {this.demoLogin}/>

            {this.props.firstPost &&
            <SplashTwo direction = {this.state.direction} 
                        demoLogin = {this.demoLogin}
                        firstPost = {this.props.firstPost}
                        author= {this.props.users[this.props.firstPost.author_id]}/>}
            
            <SplashThree direction={this.state.direction}/>
            </div>
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
