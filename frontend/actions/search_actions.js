import * as ApiPostUtil from '../util/api_post_util';

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";

export const fetchSearchResults = search => dispatch => {
    return ApiPostUtil.fetchPosts(null, null, search)
        .then(postsResponse => dispatch(receiveSearchResults(postsResponse)));
};

const receiveSearchResults = postsResponse => {
    return {
        type: RECEIVE_SEARCH_RESULTS,
        postsResponse
    };
};
