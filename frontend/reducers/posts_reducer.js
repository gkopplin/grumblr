import { RECEIVE_POST, REMOVE_POST, RECEIVE_POSTS } from '../actions/post_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
    const oldState = Object.freeze(state);
    let newState;

    switch(action.type) {
        case RECEIVE_POST:
            newState = merge({}, oldState, {[action.post.id]: action.post});
            return newState;
        case RECEIVE_POSTS:
            return action.postsResponse.posts;
        case REMOVE_POST:
            newState = merge({}, oldState);
            delete newState[action.postId];
            return newState;
        default:
            return oldState;
    }
};