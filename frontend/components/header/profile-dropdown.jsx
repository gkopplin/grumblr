import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import LikeIcon from './like-icon';
import FollowingIcon from './following-icon';
import {Link} from 'react-router-dom';
import ProfilePic from '../posts/profile_picture';

export const ProfileDropdown = (props) => {
    return (
        <div className={`profile-dropdown ${props.showDropdown ? '' : 'hidden'}`}>
            <span>
                Account
                <button onClick={props.logout} id="logout-link">Log Out</button>
            </span>
                <a id="like-link"><LikeIcon ownPost={false}/> <p className="likes-text">Likes</p></a>
            <a id="following-link"><FollowingIcon /> <p className="following-text">Following</p></a>
            <span>Grumblrs</span>
                <Link to={props.page === 'dashboard' ? `users/${props.currentUser.id}` : `${props.currentUser.id}`}
                     className="current-user"
                     onClick={() => props.toggleDropdown()}>
                    <ProfilePic username={props.currentUser.username} small={true}/>
                    <p className="dropdown-username">{props.currentUser.username}</p>
                </Link>
                <a id="posts-link">Posts</a>
                <a id="followers-link">Followers</a>
                
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
