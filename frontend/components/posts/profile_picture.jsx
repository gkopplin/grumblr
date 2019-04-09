import React from 'react';

export default props => {
    if (props.user.profilePic){
        return (
            <img src={props.user.profilePic} className={props.small ? "small-picture" : "profile-pic"}/>
        );
    } else { 
        return (
            <img src="https://s3.amazonaws.com/grumblr-seeds/monkey.jpg" className={props.small ? "small-picture" : "profile-pic"}/>
            );
            
    }
};