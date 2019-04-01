import React from 'react';
import SettingsIcon from './post_form/settings_icon';
import SettingsContainer from './post_form/settings_container';
import {Link} from 'react-router-dom';
import ProfilePic from './profile_picture';
import LikeIcon from '../header/like-icon';

class PostItem extends React.Component{ 
    constructor(props) {
        super(props);
        this.state = { 
            ownPost: this.props.currentUser === this.props.post.author_id,
            showSettings: false,
            liked: false
        };
        this.togglePostSettings = this.togglePostSettings.bind(this);
        this.toggleLike = this.toggleLike.bind(this);
    }

    componentDidMount () {

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

    togglePostSettings () {
        this.setState({showSettings: this.state.showSettings ? false : true});
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
                    <div className="post-content">{this.props.post.content}</div>

                    <div className="likes-container" onClick={this.toggleLike}>
                        <LikeIcon />
                    </div>
                    <div className="settings-icon-container">
                        <SettingsIcon ownPost = {this.state.ownPost} togglePostSettings={this.togglePostSettings}/>
                    </div>
                    <SettingsContainer showSettings = {this.state.showSettings} post = {this.props.post}/>
                </div>
            </div>
        );
    }
};

export default PostItem;

