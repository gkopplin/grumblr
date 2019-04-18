import React from 'react';
import Header from './header/header';
import PostIndex from './posts/post_index';

export default (props) => {
    return (
        <>
            <Header page="likes" loggedIn={true} history={props.history}/>
            <PostIndex page="likes" userId={null}/>
        </>
    );
};
