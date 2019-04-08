export const fetchFollowers = userId => {
    return $.ajax({
        method: 'get',
        url: 'api/follows',
        data: {userId, followers: true}
    });
};

export const fetchFollowing = userId => {
    return $.ajax({
        method: 'get',
        url: 'api/follows',
        data: {userId, followers: false}
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