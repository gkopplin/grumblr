import React from 'react';
import ReactDOM from 'react-dom';
import {openModal} from '../../../actions/modal_actions';
import {connect} from 'react-redux';

class SettingsContainer extends React.Component {
    componentDidMount () {
        const element = ReactDOM.findDOMNode(this);
        element.style.position = 'absolute';
        element.style.top = String(this.props.position+65)+'px';
        element.style.left = "120px";

    }
    
    render () {
        return (
            <div className="settings-container">
                <button onClick={() => this.props.openModal("update", {post: this.props.post})}>Edit</button>
                <button onClick={() => this.props.openModal("delete", {post: this.props.post})}>Delete</button>
            </div>
        );
    }
};

const mdp = dispatch => {
    return {
        openModal: (modal, post) => dispatch(openModal(modal, post))
    };
};

export default connect(null, mdp)(SettingsContainer);