import * as ApiPostUtil from '../util/api_post_util';

export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";

export const createPost = post => dispatch => {
    return ApiPostUtil.createPost(post)
        .then(post => dispatch(receivePost(post)));
};

const receivePost = post => {
    return {
        type: RECEIVE_POST,
        post
    };
};

export const updatePost = post => dispatch => {
    return ApiPostUtil.updatePost(post)
        .then(post => dispatch(receivePost(post)));
};

export const deletePost = id => dispatch => {
    return ApiPostUtil.deletePost(id)
        .then(id => dispatch(removePost(id)));
};

const removePost = postId => {
    return {
        type: REMOVE_POST,
        postId 
    };
};