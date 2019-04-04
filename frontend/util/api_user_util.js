export const fetchUsers = followers => {
    return $.ajax({
        method: 'get',
        url: 'api/users',
        data: {followers}
    });
};