import React from 'react';
import SettingsIcon from './post_form/settings_icon';
import SettingsContainer from './post_form/settings_container';


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
            <div className="post-item">
                <span className="post-author">{this.props.author.username}</span>
                <div className="post-content">{this.props.post.content}</div>
                <div className="settings-icon-container">
                    <SettingsIcon ownPost = {this.state.ownPost} togglePostSettings={this.togglePostSettings}/>
                </div>
                <SettingsContainer showSettings = {this.state.showSettings} post = {this.props.post}/>
            </div>
        );
    }
};

export default PostItem;

