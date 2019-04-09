
export const createPost = formData => {
    return $.ajax({
        method: 'post',
        url: 'api/posts',
        data: formData,
        contentType: false,
        processData: false
    });
};

export const updatePost = (formData, id) => {
    return $.ajax({
        method: 'patch',
        url: `api/posts/${id}`,
        data: formData,
        contentType: false,
        processData: false
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

export const fetchPosts = (page, userId, search, splash) => {
    return $.ajax({
        method: 'get',
        url: 'api/posts',
        data: {page, userId, search, splash}
    });
};



