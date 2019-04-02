import React from 'react';

export default props => {
    switch(props.username) {
        case 'Demo User':
            return(
                <img src="https://s3.amazonaws.com/grumblr-seeds/monkey.jpg" className={props.small ? "small-picture" : "profile-pic"}/>
            );
        case 'Seed Data User':
            return (
                <img src="https://s3.amazonaws.com/grumblr-seeds/Grumpy_Hot-Dog_Batman.jpg" className={props.small ? "small-picture" : "profile-pic"}/>
            );
        case 'Seed Data User Two':
            return (
                <img src="https://s3.amazonaws.com/grumblr-seeds/grandpa.jpg" className={props.small ? "small-picture" : "profile-pic"}/>
            );
        default:
            return (
                <img src="https://s3.amazonaws.com/grumblr-seeds/monkey.jpg" className={props.small ? "small-picture" : "profile-pic"}/>
            );
    }
};