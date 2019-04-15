import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';

export default (state={}, action) => {
    const oldState = Object.freeze(state);
    
    switch(action.type) {
        case RECEIVE_SEARCH_RESULTS:
            return action.users;
        default:
            return oldState;
    }
};