
export const createPost = post => {
    return $.ajax({
        method: 'post',
        url: 'api/posts',
        data: {post,
            page: "dashboard"}
    });
};

export const updatePost = post => {
    return $.ajax({
        method: 'patch',
        url: `api/posts/${post.id}`,
        data: {post,
            page: "dashboard"}
    });
};

export const deletePost = postId => {
    return $.ajax({
        method: 'delete',
        url: `api/posts/${postId}`,
        data: {postId}
    });
};

export const fetchPost = postId => {
    return $.ajax({
        method: 'get',
        url: `api/posts/${postId}`
    });
};

export const fetchPosts = (page, userId) => {
    return $.ajax({
        method: 'get',
        url: 'api/posts',
        data: {page, userId}
    });
};



