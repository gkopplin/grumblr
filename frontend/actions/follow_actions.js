import * as ApiFollowUtil from '../util/api_follow_util';

export const RECEIVE_FOLLOWERS = "RECEIVE_FOLLOWERS";

export const requestFollowers = userId => dispatch => {
    return ApiFollowUtil.fetchFollowers(userId)
        .then(followers => dispatch(receiveFollowers(followers, userId)));  
};

const receiveFollowers = (followers, followedId) => {
    return {
        type: RECEIVE_FOLLOWERS,
        followers,
        followedId
    };
};

export const createFollow = follow => dispatch => {
    return ApiFollowUtil.createFollow(follow)
        .then(followers => dispatch(receiveFollowers(followers, follow.followed_id)));
};