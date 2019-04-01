import {RECEIVE_LIKE, REMOVE_LIKE} from '../actions/like_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
    const oldState = Object.freeze(state);
    let newState;
    
    switch(action.type) {
        case RECEIVE_LIKE:
            newState = merge({}, oldState, {[action.like.id]: action.like});
            return newState;
        case REMOVE_LIKE:
            newState = merge({}, oldState);
            delete newState[action.likeId];
            return newState;
        default:
            return oldState;
    }
};