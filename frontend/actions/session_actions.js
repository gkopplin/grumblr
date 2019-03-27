export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
import * as ApiSessionUtil from '../util/api_session_util';

export const signup = user => dispatch => {
    return ApiSessionUtil.createUser(user)
        .then(user => dispatch(receiveCurrentUser(user)),
            errors => dispatch(receiveSessionErrors(errors))
        );
};

export const login = user => dispatch => {
    return ApiSessionUtil.createSession(user)
        .then(user => dispatch(receiveCurrentUser(user)),
            errors => dispatch(receiveSessionErrors(errors))
        );
};

const receiveCurrentUser = currentUser => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    };
};

export const logout = () => dispatch => {
    return ApiSessionUtil.deleteSession()
        .then( () => dispatch(logoutCurrentUser()),
            errors => dispatch(receiveSessionErrors(errors))
        );
};

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    };
};

const receiveSessionErrors = errors => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    };
};