import React from 'react';
import HomeIcon from './header-icons/home-icon';
import ProfileIcon from './header-icons/profile-icon';
import Search from './search';

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
                    <ProfileIcon page={this.props.page} />
                    <div className={(this.props.page === "profile" && this.props.currentUser !== this.props.userId) ? 'follow-container' : 'hidden'}>
                        {this.props.followers[this.props.userId] && this.props.followers[this.props.userId].includes(this.props.currentUser) ?
                            <button className="unfollow" onClick={() => {
                                this.props.deleteFollow(this.props.userId);
                            }
                            }>Unfollow</button> :
                            <button className="follow" onClick={() => this.props.createFollow({ followed_id: this.props.userId, follower_id: this.props.currentUser })}>Follow</button>
                        }
                    </div>
                </nav>
            </header>
        </>
    );
}