import React from 'react';
import {openModal} from '../../../actions/modal_actions';
import {connect} from 'react-redux';

const SettingsContainer = props => {
    return (
        <div className={props.showSettings ? "settings-container" : "hidden"}>
            <button onClick={() => props.openModal("update", {post: props.post})}>Edit</button>
            <button onClick={() => props.openModal("delete", {post: props.post})}>Delete</button>
        </div>
    );
};

const mdp = dispatch => {
    return {
        openModal: (modal, post) => dispatch(openModal(modal, post))
    };
};

export default connect(null, mdp)(SettingsContainer);