import React from 'react';
import ProfilePic from './profile_picture';

class NoLinkPost extends React.Component{ 
    constructor(props) {
        super(props);
        this.state = { 
            liked: false,
            showSettings: false
        };
        this.ownPost = this.props.currentUser === this.props.post.author_id;
        this.toggleLike = this.toggleLike.bind(this);
        this.toggleSettings = this.toggleSettings.bind(this);
    }

    toggleSettings() {
        this.setState({ showSettings: this.state.showSettings ? false : true });
    }

    toggleLike () {
        if (this.state.liked) {
            const like = this.props.likes.filter(like => {
                return like.user_id === this.props.currentUser &&
                    like.post_id === this.props.post.id
            })[0];
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

                        <ProfilePic user = {this.props.author}/>

                </div>
                <div className="post-item">
                        <span className="post-author">{this.props.author.username}</span>

                    <div className="post-content">
                        {this.props.post.post_type === "text" &&
                            <p>
                                {this.props.post.content}
                            </p> }
                        {this.props.post.post_type === "photo" &&
                                <img src={this.props.post.content}></img>}

                        {this.props.post.post_type === "video" &&  
                                <video controls loop>
                                    <source src={this.props.post.content}/>
                                </video>}

                        {this.props.post.post_type === "audio" &&  
                                <audio controls loop>
                                    <source src={this.props.post.content}/>
                                </audio>}

                        {this.props.post.post_type === "link" &&  
                            <a href={this.props.post.content}>{this.props.post.content}</a>}
                    </div>
                </div>
            </div>
        );
    }
};

export default NoLinkPost;

