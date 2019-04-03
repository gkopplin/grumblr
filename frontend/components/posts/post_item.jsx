import React from 'react';
import SettingsIcon from './post_form/settings_icon';
import {Link} from 'react-router-dom';
import ProfilePic from './profile_picture';
import LikeIcon from '../header/like-icon';
import SettingsContainer from './post_form/settings_container';

class PostItem extends React.Component{ 
    constructor(props) {
        super(props);
        this.state = { 
            ownPost: this.props.currentUser === this.props.post.author_id,
            liked: false,
            showSettings: false
        };
        this.toggleLike = this.toggleLike.bind(this);
        this.toggleSettings = this.toggleSettings.bind(this);
    }

    componentDidMount() {
        document.addEventListener("click", (e) => {
            if (e.target.className != "settings-icon" &&
                       e.target.id != "settings-icon") {
                this.setState({ showSettings: false });
            }
        });
    }

    toggleSettings() {
        this.setState({ showSettings: this.state.showSettings ? false : true });
    }

    toggleLike () {
        if (this.state.liked) {
            const like = this.props.likes.filter(like => like.user_id === this.props.currentUser)[0];
            this.props.deleteLike(like.id);
            this.setState({liked: false});
        } else {
            this.props.createLike({ user_id: this.props.currentUser, post_id: this.props.post.id });
            this.setState({liked: true});
        }
    }

    render() {
        return (
            <div className="post-container">
                <div className="profile-container">
                    <Link to={this.props.page === 'dashboard' ? `users/${this.props.author.id}` : `${this.props.author.id}`}>
                        <ProfilePic username = {this.props.author.username}/>
                    </Link>
                </div>
                <div className="post-item">
                    <Link to={this.props.page === 'dashboard' ? `users/${this.props.author.id}` : `${this.props.author.id}`}>
                        <span className="post-author">{this.props.author.username}</span>
                    </Link>
                    <div className="post-content">
                        {this.props.post.post_type === "photo" ? (
                            <img src={this.props.post.content}></img>
                        ) : (
                            this.props.post.content
                        )}
                    </div>

                    <div className="post-footer">
                        <span className="likes-count">{`${this.props.likes.length} likes`}</span>
                        <div className="likes-container" onClick={this.toggleLike}>
                            <LikeIcon liked={this.state.liked} ownPost={this.state.ownPost}/>
                        </div>
                        <div className={this.state.ownPost ? "settings-icon-container" : "hidden"}>
                            <SettingsIcon ownPost = {this.state.ownPost} post={this.props.post} toggleSettings={this.toggleSettings}/>
                        </div>
                        <SettingsContainer showSettings={this.state.showSettings} />
                    </div>
                </div>
            </div>
        );
    }
};

export default PostItem;

