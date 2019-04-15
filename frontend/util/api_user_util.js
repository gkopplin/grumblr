export const fetchUsers = (followers, search) => {
    return $.ajax({
        method: 'get',
        url: 'api/users',
        data: {followers, search}
    });
};