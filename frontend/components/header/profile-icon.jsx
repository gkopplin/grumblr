import React from 'react';
import {openModal} from '../../actions/modal_actions';
import {connect} from 'react-redux';

const ProfileIcon = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" onClick={() => props.openModal("profile-dropdown")} className="profile"><path id="profile" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#ffffff"/><path d="M0 0h24v24H0z" fill="none" className="profile"/></svg>
    );
};

const mdp = dispatch => {
    return {
        openModal: (modal) => dispatch(openModal(modal))
    }
}

export default connect(null, mdp)(ProfileIcon);