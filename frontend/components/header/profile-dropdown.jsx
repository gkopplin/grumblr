import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

export const ProfileDropdown = (props) => {
    return (
        <div className="profile-dropdown">
            <span>Account</span>
                <Link>Likes</Link>
                <Link>Following</Link>
            <span>Grumblrs</span>
                <h3>{props.currentUser.username}</h3>
                <Link>Posts</Link>
                <Link>Followers</Link>
                <button onClick={props.logout}>Log Out</button>
        </div>
    );
};

const msp = state => {
    return {
        currentUser: state.entities.users[state.session.currentUser.id]
    };
};

const mdp = dispatch => {
    return {
        logout: () => dispatch(logout())
    };
};


export default connect(msp, mdp)(ProfileDropdown);
