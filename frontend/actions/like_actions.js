import * as ApiLikeUtil from '../util/api_like_util';

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

export const createLike = like => dispatch => {
    return ApiLikeUtil.createLike(like)
        .then(like => dispatch(receiveLike(like)));
};

const receiveLike = like => {
    return {
        type: RECEIVE_LIKE,
        like 
    };
};

export const deleteLike = likeId => dispatch => {
    return ApiLikeUtil.deleteLike(likeId)
        .then(like => dispatch(removeLike(like.id)));
};

const removeLike = likeId => {
    return {
        type: REMOVE_LIKE,
        likeId
    };
};