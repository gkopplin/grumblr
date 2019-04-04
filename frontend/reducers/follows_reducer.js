import { RECEIVE_FOLLOWERS } from '../actions/follow_actions';

export default (state={}, action) => {
    const oldState = Object.freeze(state);
    let newState;

    switch(action.type) {
        case RECEIVE_FOLLOWERS:
            newState = Object.assign({}, oldState, {[action.followedId]: action.followers});
            return newState;
        default:
            return oldState;
    }
};