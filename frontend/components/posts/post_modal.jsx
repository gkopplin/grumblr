import React from 'react';
import Modal from 'react-modal';
import PostForm from './post_form';

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
        return (
            <Modal isOpen = {this.state.visible} width="300" height="300">
                <PostForm closeModal = {this.props.closeModal}/>
                <button onClick={this.props.closeModal}>Close</button>
            </Modal>
        );
    }
};

export default postModal;