import React from 'react';

export default props => {
    switch(props.username) {
        case 'Demo User':
            return(
                <img src="https://s3.amazonaws.com/grumblr-seeds/monkey.jpg" className={props.small ? "small-picture" : "profile-pic"}/>
            );
        case 'everything-is-lame':
            return (
                <img src="https://s3.amazonaws.com/grumblr-seeds/Grumpy_Hot-Dog_Batman.jpg" className={props.small ? "small-picture" : "profile-pic"}/>
            );
        case 'grumpy_gramps':
            return (
                <img src="https://s3.amazonaws.com/grumblr-seeds/grandpa.png" className={props.small ? "small-picture" : "profile-pic"}/>
            );
        default:
            return (
                <img src="https://s3.amazonaws.com/grumblr-seeds/monkey.jpg" className={props.small ? "small-picture" : "profile-pic"}/>
            );
    }
};