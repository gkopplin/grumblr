import React from 'react';
import HomeIcon from './home-icon';
import ProfileIcon from './profile-icon';
import Search from './search';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {requestFollowers, deleteFollow, createFollow} from '../../actions/follow_actions';

class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = { showDropdown: this.props.showDropdown, loggedIn: this.props.loggedIn, formType: this.props.formType, test: false};
    }

    componentDidMount () {
        this.props.requestFollowers(this.props.userId);
    }

    render () {
        if (this.state.loggedIn) {
            return (
                <>
                <div className="unfixed-header"></div>
                <header>
                    <div className="header-left">
                        <Link to="/">
                            <img src={window.smallLogo} className="small-logo" />
                        </Link>
                        <Search page = {this.props.page}/>
                    </div>
                    <nav className="main-nav">
                        <Link to="/">
                            <HomeIcon />
                        </Link>
                        <ProfileIcon page = {this.props.page}/>
                        <div className={ (this.props.page === "profile" && this.props.currentUser !== this.props.userId) ? 'follow-container' : 'hidden'}>
                            {this.props.followers.includes(this.props.currentUser) ?
                                <button className="unfollow" onClick={() => {
                                    this.props.deleteFollow(this.props.userId);
                                    }
                                }>Unfollow</button>:
                                <button className="follow" onClick={() => this.props.createFollow({followed_id: this.props.userId, follower_id: this.props.currentUser})}>Follow</button>
                            }
                        </div>
                    </nav>
                </header>
                </>
            );
        } else if (!this.state.formType) {
            return (
                <header className="splash-header">
                    <Link to="/">
                        <img src={window.smallLogo} className="small-logo" />
                    </Link>
                </header>
            );
        }
        return (
            <header className="splash-header">
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

const msp = state => {
    return {
        currentUser: state.session.currentUser,
        followers: Object.keys(state.entities.follows).length === 0 ? [] : Object.values(state.entities.follows)[0]
    };
};

const mdp = dispatch => {
    return {
        requestFollowers: id => dispatch(requestFollowers(id)),
        deleteFollow: id => dispatch(deleteFollow(id)),
        createFollow: follow => dispatch(createFollow(follow))
    };
};


export default connect(msp, mdp)(Header);