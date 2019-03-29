import React from 'react';
import SettingsIcon from './post_form/settings_icon';
import PostModal from './post_modal';
import {Link} from 'react-router-dom';
import PostDeleteModal from './post_delete_modal';


class PostItem extends React.Component{ 
    constructor(props) {
        super(props);
        this.state = { 
            ownPost: this.props.currentUser === this.props.post.author_id
        };
    }

    render() {
        return (
            <div className="post-item">
                <span className="post-author">{this.props.author.username}</span>
                <div className="post-content">{this.props.post.content}</div>
                <SettingsIcon ownPost = {this.state.ownPost}/>
                {/* add model */}
                {/* <PostModal visible={this.state.visible} formType="update" closeModal={() => this.closeModal()}/> */}
            </div>
        );
    }
};

export default PostItem;

