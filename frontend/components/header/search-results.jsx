import React from 'react';
import {Link} from 'react-router-dom';
import ProfilePic from '../posts/profile_picture';
import { connect } from 'react-redux';

const SearchResults = props => {
    const results = props.users.map(user => {
        return <Link to={props.page === 'profile' ? `${user.id}` : `users/${user.id}`} 
                     key={user.id}
                     onClick={() => props.clearSearch()}>
                <div className="user-result">
                    <span>
                        {user.username}
                    </span>
                    <ProfilePic user={user} small={true}/>
                </div>
                </Link>})
    return (
        <ul className='search-results'>
            {results}
        </ul>
    );
}

const msp = state => {
    return {
        users: state.ui.search ? Object.values(state.ui.search) : [],
        page: state.ui.modal.data.page,
        clearSearch: state.ui.modal.data.clearSearch
    };
};



export default connect(msp)(SearchResults);
