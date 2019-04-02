import React from 'react';
import {Link} from 'react-router-dom';

export default props => {
    const results = props.users.map(user => <Link to={props.page === 'dashboard' ? `users/${user.id}` : `${user.id}`} key={user.id}>{user.username}</Link>)
    return (
        <div className={props.showResults ? 'search-results' : 'hidden'}>
            <ul>
                {results}
            </ul>
        </div>
    );
    
}
