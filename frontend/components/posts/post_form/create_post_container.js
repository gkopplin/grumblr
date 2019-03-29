import { connect } from 'react-redux';
import { createPost } from '../../../actions/post_actions';
import PostForm from './post_form';
import { closeModal } from '../../../actions/modal_actions';


const msp = state => {
    return {
        author: state.entities.users[state.session.currentUser],
        formType: "create"
    };
};

const mdp = dispatch => {
    return {
        processPost: (post) => dispatch(createPost(post)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(msp, mdp)(PostForm);