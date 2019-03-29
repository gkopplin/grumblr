import React from 'react';
import {Link} from 'react-router-dom';

export default props => {
    return (
        <Link to={`/posts/${props.post.id}/edit`}>Edit</Link>
        <button onClick={props.openModal}>Delete</button>
    );
};