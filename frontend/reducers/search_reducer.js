import { RECEIVE_SEARCH_RESULTS, REMOVE_SEARCH_RESULTS } from '../actions/search_actions';

export default (state={}, action) => {
    const oldState = Object.freeze(state);
    let newState;
    
    switch(action.type) {
        case RECEIVE_SEARCH_RESULTS:
            return action.postsResponse;
        default:
            return oldState;
    }
};