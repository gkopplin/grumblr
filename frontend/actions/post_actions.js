import * as ApiPostUtil from '../util/api_post_util';

export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const REMOVE_POST = "REMOVE_POST";


export const createPost = post => dispatch => {
    debugger
    return ApiPostUtil.createPost(post)
        .then(post => dispatch(receivePost(post)));
};

const receivePost = post => {
    return {
        type: RECEIVE_POST,
        post
    };
};

const receivePosts = postsResponse => {
    return {
        type: RECEIVE_POSTS,
        postsResponse
    };
};

export const fetchPosts = () => dispatch => {
    return ApiPostUtil.fetchPosts()
        .then(posts => dispatch(receivePosts(posts)));
};

export const fetchPost = (id) => dispatch => {
    return ApiPostUtil.fetchPost(id)
        .then(post => dispatch(receivePost(post)));
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