import React from 'react';
import HomeIcon from './home-icon';
import ProfileIcon from './profile-icon';
import ProfileDropdown from './profile-dropdown';

class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = { showDropdown: false};
        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    toggleDropdown () {
        this.setState({showDropdown: this.state.showDropdown ? false : true});
    }

    render () {
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
    }

}

export default Header;