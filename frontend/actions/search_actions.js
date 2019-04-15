import * as ApiUserUtil from '../util/api_user_util';

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";

export const fetchSearchResults = search => dispatch => {
    return ApiUserUtil.fetchUsers(null, search)
        .then(users => dispatch(receiveSearchResults(users)));
};

const receiveSearchResults = users => {
    return {
        type: RECEIVE_SEARCH_RESULTS,
        users
    };
};
