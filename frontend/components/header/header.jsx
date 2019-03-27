import React from 'react';
import HomeIcon from './home-icon';
import ProfileIcon from './profile-icon';
import ProfileDropdown from './profile-dropdown';

class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = { showDropdown: false};
    }

    render () {
        return (
            <header>
                <img src={window.smallLogo} className="small-logo"/>
                <nav className="main-nav">
                    <HomeIcon />
                    <ProfileIcon showDropdown={this.state.showDropdown}/>
                </nav>
                <ProfileDropdown />

            </header>
        );
    }

}

export default Header;