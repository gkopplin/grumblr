export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
import * as ApiSessionUtil from '../util/api_session_util';

export const signup = user => dispatch => {
    return ApiSessionUtil.createUser(user)
        .then(user => dispatch(receiveCurrentUser(user)));
};

export const login = user => dispatch => {
    return ApiSessionUtil.createSession(user)
        .then(user => dispatch(receiveCurrentUser(user)));
};

const receiveCurrentUser = currentUser => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    };
};

export const logout = () => dispatch => {
    return ApiSessionUtil.deleteSession()
        .then( () => dispatch(logoutCurrentUser()) );
};

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    };
};