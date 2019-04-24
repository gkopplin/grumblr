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
        this.setScrollStop = this.setScrollStop.bind(this);
        this.scrollStop = true;
        // this.currentScrollTop = 0;
    }

    componentDidMount () {
        this.props.fetchFirstPost(true);
    }

    componentDidUpdate(prevProps){
        this.fullSplash = document.getElementsByClassName("full-splash")[0];
        if(prevProps.firstPost != this.props.firstPost){
            this.fullSplash.removeEventListener("scroll", this.scroll);
            this.fullSplash.addEventListener("scroll", this.scroll);
        }
    }

    componentWillUnmount() {
        this.fullSplash.removeEventListener("scroll", this.scroll);
    }
    
    demoLogin () {
        this.props.demoLogin({
            username: "Demo User",
            email: "demo_user@demo_email.com",
            password: "demo_password"
        });
    }

    scroll (e) {
        e.preventDefault();
        let newPos;

        if (e.type === "scroll") {
            if ((this.fullSplash.scrollTop >= this.state.currentSplash - 1 &&
                this.state.currentSplash === 3) ||
                (this.fullSplash.scrollTop === 0 &&
                this.state.currentSplash === 1) ) {
                    this.fullSplash.classList.add("overflow");
                    this.fullSplash.scrollTop = 2;
                    setTimeout(this.setScrollStop, 1000);
                    return null;
            } else if (this.fullSplash.scrollTop > this.state.currentSplash - 1){
                this.fullSplash.scrollTop = this.state.currentSplash;
                newPos = this.state.currentSplash + 1;
            } else if (this.fullSplash.scrollTop < this.state.currentSplash - 1) {
                this.fullSplash.scrollTop = this.state.currentSplash - 2;
                newPos = this.state.currentSplash - 1;
            }
            this.fullSplash.classList.add("overflow");
            
        } else {
            if (e.target.id !== this.state.currentSplash) {
                this.fullSplash.scrollTop = e.target.id - 1;
            }
            newPos = Number(e.target.id);
        }

        if (this.scrollStop === true){
            this.scrollHelper(e, newPos);
            setTimeout(this.setScrollStop, 1000);
        }

        this.scrollStop = false;
    }

    setScrollStop() {
        this.scrollStop = true;
        const splash = document.getElementsByClassName("full-splash")[0];
        splash.classList.remove("overflow");
    }

    scrollHelper(e, newPos){
        if (newPos < this.state.currentSplash) {
            if (this.state.currentSplash === 2) {
                this.setState({ direction: "up2-1" });
            } else if (e.target.id === "1") {
                this.setState({ direction: "up3-1" });
            } else {
                this.setState({ direction: "up3-2" });
            }
        } else {
            if (this.state.currentSplash === 2) {
                this.setState({ direction: "down2-3" });
            } else if (e.target.id === "3") {
                this.setState({ direction: "down1-3" });
            } else {
                this.setState({ direction: "down1-2" });
            }
        }
        this.setState({ currentSplash: newPos });
    }

    render () {
        if (!this.props.firstPost) {
            return null;
        }
        return (
            <div className="full-splash">
            <Header loggedIn={false} formType={this.props.formType} history={null}/>

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
                        demoLogin = {this.demoLogin}
                        formType = {this.props.formType}/>

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
        firstPost: state.entities.posts ? Object.values(state.entities.posts)[0] : null,
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
