import React from 'react';
import ReactDOM from 'react-dom';
import {openModal} from '../../../actions/modal_actions';
import {connect} from 'react-redux';

const SettingsContainer = props => {
    return (
        <div className={props.showSettings ? "settings-container" : "hidden"}>
            <button onClick={() => this.props.openModal("update", {post: this.props.post})}>Edit</button>
            <button onClick={() => this.props.openModal("delete", {post: this.props.post})}>Delete</button>
        </div>
    );
    
};

const msp = state => {
    return {
        post: state.ui.modal.data ? state.ui.modal.data : null,
    };
};

const mdp = dispatch => {
    return {
        openModal: (modal, post) => dispatch(openModal(modal, post))
    };
};

export default connect(msp, mdp)(SettingsContainer);