import React from 'react';
import {Link} from 'react-router-dom';
import ProfilePic from '../posts/profile_picture';

export default props => {
    const results = props.users.map(user => {
        return <Link to={props.page === 'dashboard' ? `users/${user.id}` : `${user.id}`} 
                     key={user.id}
                     onClick={() => props.clearSearch()}>
                <div className="user-result">
                    <span>
                        {user.username}
                    </span>
                    <ProfilePic username={user.username} small={true}/>
                </div>
                </Link>})
    return (
        <ul className={props.showResults ? 'search-results' : 'hidden'}>
            {results}
        </ul>
    );
    
}
