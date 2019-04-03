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

export const deleteFollow = followedId => {
    return $.ajax({
        method: 'delete',
        url: `api/follows/${followedId}`,
        data: { followed_id: followedId }
    });
};