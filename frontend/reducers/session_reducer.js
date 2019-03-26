import {RECEIVE_CURRENT_USER} from '../actions/session_actions'; 

const _nullUser = {
    id: null
};

export default (state= _nullUser, action) => {
    const oldState = Object.freeze(state);

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return {id: action.currentUser.id};
        default:
            return oldState;
    }
};