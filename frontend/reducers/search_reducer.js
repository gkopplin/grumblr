import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';
import merge from 'lodash/merge';

export default (state={}, action) => {
    const oldState = Object.freeze(state);
    let newState;
    
    switch(action.type) {
        case RECEIVE_SEARCH_RESULTS:
            newState = merge({}, oldState, action.postsResponse);
            return newState;
        default:
            return oldState;
    }
};