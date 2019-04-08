import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import LikeIcon from './like-icon';
import FollowingIcon from './following-icon';
import {Link} from 'react-router-dom';
import ProfilePic from '../posts/profile_picture';
import {closeModal} from '../../actions/modal_actions';

export const ProfileDropdown = (props) => {
    if (props.currentUser) {

        return (
            <div className='profile-dropdown'>
            <span>
                Account
                <button onClick={() => {
                    props.closeModal();
                    props.logout(); } } 
                        id="logout-link">Log Out</button>
            </span>
                <Link to='/likes' id="like-link" onClick={() => props.closeModal()}><LikeIcon ownPost={false}/> <p className="likes-text">Likes</p></Link>
                <Link to='/following' id="following-link" onClick={() => props.closeModal()}><FollowingIcon /> <p className="following-text">Following</p></Link>
            <span>Grumblrs</span>
                <Link to={props.page === 'profile' ? `${props.currentUser.id}` : `users/${props.currentUser.id}`}
                     className="current-user"
                     onClick={() => props.closeModal()}>
                    <ProfilePic username={props.currentUser.username} small={true}/>
                    <p className="dropdown-username">{props.currentUser.username}</p>
                </Link>
                <Link to={props.page === 'profile' ? `${props.currentUser.id}` : `users/${props.currentUser.id}`} id="posts-link" onClick={() => props.closeModal()}>Posts</Link>
                <Link to="/followers" id="followers-link" onClick={() => props.closeModal()}>Followers</Link>
                    
            </div>
        );
    }
    return null;
};

const msp = state => {
    return {
        currentUser: state.entities.users[state.session.currentUser],
        page: state.ui.modal.data ? state.ui.modal.data.page : ""
    };
};

const mdp = dispatch => {
    return {
        logout: () => dispatch(logout()),
        closeModal: () => dispatch(closeModal())
    };
};


export default connect(msp, mdp)(ProfileDropdown);
