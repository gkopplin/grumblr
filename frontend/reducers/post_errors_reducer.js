import {
    RECEIVE_POST_ERRORS,
    RECEIVE_POST,
    RECEIVE_POSTS,
    REMOVE_POST
} from '../actions/post_actions';

export default (state = [], action) => {
    const oldState = Object.freeze(state);
    switch (action.type) {
        case RECEIVE_POST_ERRORS:
            return action.errors;
        case RECEIVE_POST:
            return [];
        case RECEIVE_POSTS:
            return [];
        case REMOVE_POST:
            return [];
        default:
            return oldState;
    }
};