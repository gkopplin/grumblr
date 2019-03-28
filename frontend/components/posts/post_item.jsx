import React from 'react';

export default ({post, author}) => {
    return (
        <div className="post-item">
            <span className="post-author">{author.username}</span>
            <div className="post-content">{post.content}</div>
        </div>
    );
};

