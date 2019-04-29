import React from 'react';
import HomeIcon from './header-icons/home-icon';
import ProfileIcon from './header-icons/profile-icon';
import Search from './search';
import { Link } from 'react-router-dom';

export default props => {
    return (
        <>
            <div className="unfixed-header"></div>
            <header className="main-header">
                <div className="header-left">
                    <Link to="/">
                        <img src={window.smallLogo} className="small-logo" />
                    </Link>
                    <Search page={props.page} history={props.history} />
                </div>
                <nav className="main-nav">
                    <Link to="/">
                        <HomeIcon />
                    </Link>
                    <ProfileIcon page={props.page} />
                    <div className={(props.page === "profile" && props.currentUser !== props.userId) ? 'follow-container' : 'hidden'}>
                        {props.followers[props.userId] && props.followers[props.userId].includes(props.currentUser) ?
                            <button className="unfollow" onClick={() => props.deleteFollow(props.userId)}>
                                Unfollow
                            </button> :
                            <button className="follow" onClick={() => props.createFollow({ followed_id: props.userId, follower_id: props.currentUser })}>Follow</button>
                        }
                    </div>
                </nav>
            </header>
        </>
    );
}