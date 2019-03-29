
export const createPost = post => {
    return $.ajax({
        method: 'post',
        url: 'api/posts',
        data: {post}
    });
};

export const updatePost = post => {
    return $.ajax({
        method: 'patch',
        url: `api/posts/${post.id}`,
        data: {post}
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

// temp

export const fetchPosts = () => {
    return $.ajax({
        method: 'get',
        url: 'api/posts'
    });
};



