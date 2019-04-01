export const createLike = like => {
    return $.ajax({
        method: 'post',
        url: 'api/likes',
        data: {like}
    });
};

export const deleteLike = likeId => {
    return $.ajax({
        method: 'delete',
        url: 'api/likes',
        data: {like_id: likeId}
    });
};