import * as ApiFollowUtil from '../util/api_follow_util';

export const RECEIVE_FOLLOWERS = "RECEIVE_FOLLOWERS";
export const REMOVE_FOLLOWER = "REMOVE_FOLLOWER";

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

export const deleteFollow = followedId => dispatch => {
    return ApiFollowUtil.deleteFollow(followedId)
        .then(followerId => dispatch(removeFollower(followerId, followedId)));
};

const removeFollower = (followerId, followedId) => {
    return {
        type: REMOVE_FOLLOWER,
        followerId,
        followedId
    };
};

