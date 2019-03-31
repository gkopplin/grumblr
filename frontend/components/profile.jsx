import React from 'react';
import Header from './header/header';
import PostIndex from './posts/post_index';

export default (props) => {
    return (
        <>
            <Header page="profile" loggedIn={true} />
            <PostIndex page="profile" userId={props.match.params.userId}/>
        </>
    );
};