import React from 'react';
import SettingsIcon from './post_form/settings_icon';
import SettingsContainer from './post_form/settings_container';
import {Link} from 'react-router-dom';


class PostItem extends React.Component{ 
    constructor(props) {
        super(props);
        this.state = { 
            ownPost: this.props.currentUser === this.props.post.author_id,
            showSettings: false
        };
        this.togglePostSettings = this.togglePostSettings.bind(this);
    }

    togglePostSettings () {
        this.setState({showSettings: this.state.showSettings ? false : true});
    }

    render() {
        return (
            <div className="post-container">
                <div className="profile-container">
                    <Link to={`users/${this.props.author.id}`}>
                        <img src={window.profilePic} className="profile-pic"/>
                    </Link>
                </div>
                <div className="post-item">
                    <Link to={`users/${this.props.author.id}`}>
                        <span className="post-author">{this.props.author.username}</span>
                    </Link>
                    <div className="post-content">{this.props.post.content}</div>
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

