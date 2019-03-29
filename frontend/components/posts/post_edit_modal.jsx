import React from 'react';
import Modal from 'react-modal';
import CreatePostForm from './post_form/create_post_container';
import UpdatePostForm from './post_form/update_post_container';
import { Link } from 'react-router-dom';

class PostEditModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { visible: this.props.visible };
    }

    componentDidUpdate(prevProps) {
        // if (prevProps.visible != this.props.visible) {
        //     this.setState({ visible: this.props.visible });
        // }
    }

    render() {
        // <Modal isOpen={this.state.visible} width="300" height="300">
        //     <UpdatePostForm closeModal={this.props.closeModal} />
        //     <Link to="/dashboard">Close</Link>
        // </Modal>
        debugger
        return (
            <Modal isOpen={true}>it worked!</Modal>
        );
    }
};

export default PostEditModal;