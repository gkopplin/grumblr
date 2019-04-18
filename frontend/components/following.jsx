import React from 'react';
import Header from './header/header';
import UsersIndex from './users_index';

export default (props) => {
    return (
        <>
            <Header page="following" loggedIn={true} history={props.history} />
            <UsersIndex followers={false}/>
        </>
    );
};