import React from 'react';
import SettingsIcon from './post_form/settings_icon';
import {Link} from 'react-router-dom';
import ProfilePic from './profile_picture';
import LikeIcon from '../header/like-icon';
import ReactDOM from 'react-dom';

class PostItem extends React.Component{ 
    constructor(props) {
        super(props);
        this.state = { 
            ownPost: this.props.currentUser === this.props.post.author_id,
            liked: false,
            position: 0
        };
        this.toggleLike = this.toggleLike.bind(this);
    }

    componentDidMount () {
        const element = ReactDOM.findDOMNode(this);
        this.setState({position: element.offsetTop});
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
                    <div className="post-content">{this.props.post.content}</div>

                    <div className="post-footer">
                        <span className="likes-count">{`${this.props.likes.length} likes`}</span>
                        <div className="likes-container" onClick={this.toggleLike}>
                            <LikeIcon liked={this.state.liked} ownPost={this.state.ownPost}/>
                        </div>
                        <div className={this.state.ownPost ? "settings-icon-container" : "hidden"}>
                            <SettingsIcon ownPost = {this.state.ownPost} position={this.state.position} post={this.props.post}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default PostItem;

