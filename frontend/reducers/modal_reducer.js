import {OPEN_MODAL, CLOSE_MODAL} from '../actions/modal_actions';

export default (state = {}, action) => {
    const oldState = Object.freeze(state);

    switch(action.type) {
        case OPEN_MODAL:
            return action.modal;
        case CLOSE_MODAL:
            return {name: null, data: {post: null, users: null} };
        default:
            return oldState;
    }
};