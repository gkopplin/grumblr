import React from 'react';
import Modal from 'react-modal';
import { deletePost } from '../../actions/post_actions';

class PostDeleteModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { visible: this.props.visible };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.visible != this.props.visible) {
            this.setState({ visible: this.props.visible });
        }
    }

    render() {
        // <Modal isOpen={this.state.visible} width="300" height="300">
        //     <UpdatePostForm closeModal={this.props.closeModal} />
        //     <Link to="/dashboard">Close</Link>
        // </Modal>
        return (
            <Modal isOpen={true}>it worked!</Modal>
        );
    }
};

export default PostDeleteModal;