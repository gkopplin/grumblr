import { RECEIVE_FOLLOWERS, REMOVE_FOLLOWER } from '../actions/follow_actions';
import merge from 'lodash/merge';

export default (state={}, action) => {
    const oldState = Object.freeze(state);
    let newState;

    switch(action.type) {
        case RECEIVE_FOLLOWERS:
            newState = merge({}, oldState, {[action.followedId]: action.followers});
            return newState;
        case REMOVE_FOLLOWER:
            newState = merge({}, oldState);
            const followers = newState[action.followedId].filter(id => id !== action.followerId);
            newState[action.followedId] = followers;
            return newState;
        default:
            return oldState;
    }
};