import React from 'react';
import Header from './header/header';
import PostIndex from './posts/post_index';

export default (props) => {
    return (
        <>
        <Header loggedIn = {true}/>
            <PostIndex page="dashboard" userId={props.match.params.userId}/>
        </>
    );
};