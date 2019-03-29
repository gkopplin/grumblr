import * as ApiPostUtil from '../util/api_post_util';
import {closeModal} from './modal_actions';

export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";

export const createPost = post => dispatch => {
    return ApiPostUtil.createPost(post)
        .then(post => {
            dispatch(receivePost(post));
            dispatch(closeModal());
        },
            errors => dispatch(receivePostErrors(errors.responseJSON))
        );
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
        .then(posts => dispatch(receivePosts(posts)),
            errors => dispatch(receivePostErrors(errors.responseJSON))
            );
};

export const fetchPost = (id) => dispatch => {
    return ApiPostUtil.fetchPost(id)
        .then(post => dispatch(receivePost(post)),
            errors => dispatch(receivePostErrors(errors.responseJSON))
            );
};

export const updatePost = post => dispatch => {
    return ApiPostUtil.updatePost(post)
        .then(post => {
            dispatch(receivePost(post));
            dispatch(closeModal());
        },
            errors => dispatch(receivePostErrors(errors.responseJSON))
            );
};

export const deletePost = id => dispatch => {
    return ApiPostUtil.deletePost(id)
        .then(post => {
            dispatch(removePost(post));
            dispatch(closeModal());
        },
            errors => dispatch(receivePostErrors(errors.responseJSON))
        );
};

const removePost = post => {
    return {
        type: REMOVE_POST,
        postId: post.id 
    };
};

const receivePostErrors = errors => {
    return {
        type: RECEIVE_POST_ERRORS,
        errors
    };
};