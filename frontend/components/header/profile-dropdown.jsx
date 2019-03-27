import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import LikeIcon from './like-icon';
import FollowingIcon from './following-icon';

export const ProfileDropdown = (props) => {
    return (
        <div className={`profile-dropdown ${props.showDropdown ? '' : 'hidden'}`}>
            <span>Account</span>
                <a id="like-link"><LikeIcon /> Likes</a>
                <a id="following-link"><FollowingIcon /> Following</a>
            <span>Grumblrs</span>
                <h3>{props.currentUser.username}</h3>
                <a id="posts-link">Posts</a>
                <a id="followers-link">Followers</a>
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
