export const fetchFollowers = userId => {
    return $.ajax({
        method: 'get',
        url: 'api/follows',
        data: {userId}
    });
};

export const createFollow = follow => {
    return $.ajax({
        method: 'post',
        url: 'api/follows',
        data: {follow}
    });
};