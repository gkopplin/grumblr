import React from 'react';
import HomeIcon from './home-icon';
import ProfileIcon from './profile-icon';
import ProfileDropdown from './profile-dropdown';
import {Link} from 'react-router-dom';

class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = { showDropdown: false, loggedIn: true};
        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    toggleDropdown () {
        this.setState({showDropdown: this.state.showDropdown ? false : true});
    }

    render () {
        if (this.state.loggedIn) {
            return (
                <header>
                    <img src={window.smallLogo} className="small-logo"/>
                    <nav className="main-nav">
                        <HomeIcon />
                        <ProfileIcon toggleDropdown = {this.toggleDropdown}/>
                    </nav>
                    <ProfileDropdown showDropdown = {this.state.showDropdown}/>
    
                </header>
            );
        } else if (!this.state.formType) {
            return (
                <header>
                    <img src={window.smallLogo} className="small-logo" />
                </header>
            );
        }
        return (
            <header>
                <img src={window.smallLogo} className="small-logo" />
                <Link to={this.state.formType === "Log In" ? "/signup" : "/login"}>{this.state.formType === "Log In" ? "Get Started" : "Log In"}</Link>
            </header>
        );
    }

}

export default Header;