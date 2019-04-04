import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_POSTS } from '../actions/post_actions';
import { RECEIVE_USERS } from '../actions/user_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
    const oldState = Object.freeze(state);
    let newState;

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState = merge({}, oldState, {[action.currentUser.id]: action.currentUser });
            return newState;
        case RECEIVE_POSTS:
            newState = merge({}, oldState, action.postsResponse.authors);
            return newState;
        case RECEIVE_USERS:
            newState = merge({}, oldState, action.users);
            return newState;
        default:
            return oldState;
    }
};