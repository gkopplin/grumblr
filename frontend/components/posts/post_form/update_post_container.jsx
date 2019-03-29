import { connect } from 'react-redux';
import { updatePost, fetchPost } from '../../../actions/post_actions';
import PostForm from './post_form';
import React from 'react';

class EditPostForm extends React.Component {
    componentDidMount () {
        const id = this.props.match.params.postId;
        this.props.fetchPost(id);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.post.id != this.props.match.params.postId) {
            this.props.fetchPost(this.props.match.params.postId);
        }
    }

    render () {
        const {author, formType, processPost, post} = this.props;
        return (
            <PostForm 
                author={author} 
                formType={formType}
                processPost={processPost}
                post = {post} />
        );
    }
        
}

const msp = (state, ownProps) => {
    const id = ownProps.match.params.postId;
    const post = state.posts[id];

    return {
        author: state.entities.users[state.session.currentUser],
        formType: "update",
        post
    };
};

const mdp = dispatch => {
    return {
        processPost: (post) => dispatch(updatePost(post)),
        fetchPost: id => dispatch(fetchPost(id))
    };
};

export default connect(msp, mdp)(EditPostForm);