export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
import * as ApiSessionUtil from '../util/api_session_util';

export const signup = user => dispatch => {
    return ApiSessionUtil.createUser(user)
        .then(user => dispatch(receiveCurrentUser(user)));
};

export const login = user => dispatch => {
    return ApiSessionUtil.createSession(user)
        .then(user => dispatch(receiveCurrentUser(user)));
};

export const receiveCurrentUser = currentUser => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    };
};