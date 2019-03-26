export const createUser = user => {
    return $.ajax({
        method: 'post',
        url: 'api/users',
        data: { user }
    });
};