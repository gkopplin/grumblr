import React from 'react';
import HomeIcon from './home-icon';
import ProfileIcon from './profile-icon';
import ProfileDropdown from './profile-dropdown';
import {Link} from 'react-router-dom';

class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = { showDropdown: this.props.showDropdown, loggedIn: this.props.loggedIn, formType: this.props.formType};
        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    toggleDropdown () {
        this.setState({showDropdown: this.state.showDropdown ? false : true});
    }

    render () {
        if (this.state.loggedIn) {
            return (
                <header>
                    <Link to="/">
                        <img src={window.smallLogo} className="small-logo" />
                    </Link>
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
                    <Link to="/">
                        <img src={window.smallLogo} className="small-logo" />
                    </Link>
                </header>
            );
        }
        return (
            <header>
                <Link to="/">
                    <img src={window.smallLogo} className="small-logo" />
                </Link>
                <Link to={this.state.formType === "Log In" ? "/signup" : "/login"}>
                    <span className="header-link">{this.state.formType === "Log In" ? "Get Started" : "Log In"}</span>
                </Link>
            </header>
        );
    }

}

export default Header;