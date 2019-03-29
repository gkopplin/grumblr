import React from 'react';
import Modal from 'react-modal';
import CreatePostForm from './post_form/create_post_container';
import UpdatePostForm from './post_form/update_post_container';
import {Link} from 'react-router-dom';

class postModal extends React.Component {
    constructor (props) {
        super(props);
        this.state = {visible: this.props.visible};
    }

    componentDidUpdate (prevProps) {
        if (prevProps.visible != this.props.visible) {
            this.setState({visible: this.props.visible});
        }
    }

    render () {
        if (this.props.formType === "update"){
            return (
                <Modal isOpen={this.state.visible} width="300" height="300">
                    <UpdatePostForm closeModal={this.props.closeModal} />
                    <Link to="/dashboard">Close</Link>
                </Modal>
            );
        } else {    
            return (
                <Modal isOpen = {this.state.visible} width="300" height="300">
                    <CreatePostForm closeModal = {this.props.closeModal}/>
                    <button onClick={this.props.closeModal}>Close</button>
                </Modal>
            );
        }
    }
};

export default postModal;