import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {requestFollowers, deleteFollow, createFollow} from '../../actions/follow_actions';
import LoggedInHeader from './logged-in-header';

class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = { showDropdown: false };
    }

    componentDidMount() {
        if (this.props.loggedIn) {
            this.props.requestFollowers(this.props.userId ? this.props.userId : this.props.currentUser);
        }
    }
    
    componentDidUpdate(prevProps) {
        if (prevProps.userId !== this.props.userId &&
             this.props.loggedIn &&
             !(isNaN(prevProps.userId) && isNaN(this.props.userId))) {
            this.props.requestFollowers(this.props.userId ? this.props.userId : this.props.currentUser);
        }
    }

    render () {
        if (this.props.loggedIn) {
            <LoggedInHeader page={this.props.page} history={this.props.history}/>
        } else {
            return (
                <header className="splash-header">
                    <Link to="/">
                        <img src={window.smallLogo} className="small-logo" />
                    </Link>
                    {this.props.formType &&
                        <Link to={this.props.formType === "Log In" ? "/signup" : "/login"}>
                            <span className="header-link">{this.props.formType === "Log In" ? "Get Started" : "Log In"}</span>
                        </Link>
                    }
                </header>
            );
        }
    }

}

const msp = state => {
    return {
        currentUser: state.session.currentUser,
        followers: Object.keys(state.entities.follows).length === 0 ? [] : state.entities.follows
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