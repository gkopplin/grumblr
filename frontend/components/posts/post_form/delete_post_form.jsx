import React from 'react';
import { connect } from 'react-redux';
import {closeModal} from '../../../actions/modal_actions';
import {deletePost} from '../../../actions/post_actions';

const deletePostForm = props => {
    return (
        <div className="delete-post-form">
            <h2>Are you sure you want to delete this post?</h2>
            <button onClick={() => {
                    props.deletePost(props.post.id)
                    props.closeModal()
                }}>OK</button>
            <button onClick={() => props.closeModal()}>Cancel</button>
            <ul className="errors">
                {props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const msp = state => {
    return {
        post: state.ui.modal.post,
        errors: state.errors.posts
    }
}

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        deletePost: id => dispatch(deletePost(id))
    }
}

export default connect(msp, mdp)(deletePostForm);