import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

export const ProfileDropdown = (props) => {
    return (
        <div className={`profile-dropdown ${props.showDropdown ? '' : 'hidden'}`}>
            <span>Account</span>
                <a>Likes</a>
                <a>Following</a>
            <span>Grumblrs</span>
                <h3>{props.currentUser.username}</h3>
                <a>Posts</a>
                <a>Followers</a>
                <button onClick={props.logout} className="button-logout">Log Out</button>
        </div>
    );
};

const msp = state => {
    return {
        currentUser: state.entities.users[state.session.currentUser]
    };
};

const mdp = dispatch => {
    return {
        logout: () => dispatch(logout())
    };
};


export default connect(msp, mdp)(ProfileDropdown);
