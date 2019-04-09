import React from 'react';
import SettingsIcon from './post_icons/settings_icon';
import {Link} from 'react-router-dom';
import ProfilePic from './profile_picture';
import LikeIcon from '../header/header-icons/like-icon';
import SettingsContainer from './post_form/settings_container';

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

    componentDidMount() {
        // document.addEventListener("click", (e) => {
        //     if (e.target.className != "settings-icon" &&
        //                e.target.id != "settings-icon") {
        //         this.setState({ showSettings: false });
        //     }
        // });

        // this.setState({ liked: this.props.likes.some(like => {
        //     return like.user_id === this.props.currentUser &&
        //         like.post_id === this.props.post.id
        // })});
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

                    {/* <div className="post-footer">
                        <span className="likes-count">{`${this.props.likes.length} likes`}</span>
                        <div className="likes-container" onClick={this.toggleLike}>
                            <LikeIcon liked={this.state.liked} ownPost={this.ownPost}/>
                        </div>
                        <div className={this.ownPost ? "settings-icon-container" : "hidden"}>
                            <SettingsIcon ownPost = {this.ownPost} post={this.props.post} toggleSettings={this.toggleSettings}/>
                        </div>
                        <SettingsContainer showSettings={this.state.showSettings} post={this.props.post} />
                    </div> */}
                </div>
            </div>
        );
    }
};

export default NoLinkPost;

