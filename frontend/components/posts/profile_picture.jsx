import React from 'react';

export default props => {
    switch(props.username) {
        case 'Demo User':
            return(
                <img src="https://s3.amazonaws.com/grumblr-seeds/monkey.jpg" className={props.small ? "small-picture" : "profile-pic"}/>
            );
        case 'everything_is_lame':
            return (
                <img src="https://s3.amazonaws.com/grumblr-seeds/Grumpy_Hot-Dog_Batman.jpg" className={props.small ? "small-picture" : "profile-pic"}/>
            );
        case 'grumpy_gramps':
            return (
                <img src="https://s3.amazonaws.com/grumblr-seeds/grandpa.png" className={props.small ? "small-picture" : "profile-pic"}/>
            );
        case 'get_off_my_lawn':
            return (
                <img src="https://s3.amazonaws.com/grumblr-seeds/owl.jpg" className={props.small ? "small-picture" : "profile-pic"}/>
            );
        default:
            return (
                <img src="https://s3.amazonaws.com/grumblr-seeds/monkey.jpg" className={props.small ? "small-picture" : "profile-pic"}/>
            );
    }
};