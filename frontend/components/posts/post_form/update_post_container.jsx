import { connect } from 'react-redux';
import { updatePost } from '../../../actions/post_actions';
import PostForm from './post_form';
import React from 'react';
import { closeModal } from '../../../actions/modal_actions';

class EditPostForm extends React.Component {

    render () {
        const {author, formType, processPost, post, closeModal, errors} = this.props;
        return (
            <PostForm 
                author={author} 
                formType={formType}
                processPost={processPost}
                post = {post}
                closeModal = {closeModal}
                errors = {errors}/>
        );
    }
        
}

const msp = (state) => {

    return {
        author: state.entities.users[state.session.currentUser],
        formType: "update",
        post: state.ui.modal.data.post,
        errors: state.errors.posts
    };
};

const mdp = dispatch => {
    return {
        processPost: (post) => dispatch(updatePost(post)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(msp, mdp)(EditPostForm);