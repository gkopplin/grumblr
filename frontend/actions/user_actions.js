import * as ApiUserUtil from '../util/api_user_util';

export const RECEIVE_USERS = "RECEIVE_USERS";

export const fetchUsers = followers => dispatch => {
    return ApiUserUtil.fetchUsers(followers)
        .then(users => dispatch(receiveUsers(users)));
};

const receiveUsers = users => {
    return {
        type: RECEIVE_USERS,
        users
    };
};