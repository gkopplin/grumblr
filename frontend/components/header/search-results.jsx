import React from 'react';
import {Link} from 'react-router-dom';

export default props => {
    const results = props.users.map(user => {
        return <Link to={props.page === 'dashboard' ? `users/${user.id}` : `${user.id}`} 
                     key={user.id}
                     onClick={() => props.clearSearch()}>
                {user.username}</Link>})
    return (
        <ul className={props.showResults ? 'search-results' : 'hidden'}>
            {results}
        </ul>
    );
    
}
