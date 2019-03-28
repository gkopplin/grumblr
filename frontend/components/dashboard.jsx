import React from 'react';
import Header from './header/header';
import PostIndex from './posts/post_index';
import PostIcons from './posts/post_icons';

export default (props) => {
    return (
        <>
        <Header loggedIn = {true}/>
        <PostIcons />
        <PostIndex />
        </>
    );
};