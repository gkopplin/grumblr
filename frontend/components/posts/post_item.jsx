import React from 'react';
import SettingsIcon from './post_form/settings_icon';
import PostModal from './post_modal';
import {Link} from 'react-router-dom';


class PostItem extends React.Component{ 
    constructor(props) {
        super(props);
        this.togglePostSettings = this.togglePostSettings.bind(this);
        this.state = { 
            visible: false,
            ownPost: this.props.currentUser === this.props.post.author_id
        };
        this.closeModal = this.closeModal.bind(this);
    }

    togglePostSettings () {
        this.setState({visible: this.state.visible ? false : true});
    }

    closeModal() {
        this.setState({ visible: false });
    }

    render() {
        const newTo = {
            pathname: `/posts/${this.props.post.id}/edit`,
            visible: true,
            formType: "update",
            closeModal: () => this.closeModal()};
        return (
            <div className="post-item">
                <span className="post-author">{this.props.author.username}</span>
                <div className="post-content">{this.props.post.content}</div>
                {/* <Link to={`/posts/${this.props.post.id}/edit`} 
                    params= {{
                        visible: true,
                        formType: "update",
                        closeModal: () => this.closeModal()
                    }}> */}
                    <Link to = {newTo}>
                    <SettingsIcon togglePostSettings={() => this.togglePostSettings()} ownPost = {this.state.ownPost}/>
                </Link>
                {/* <PostModal visible={this.state.visible} formType="update" closeModal={() => this.closeModal()}/> */}
            </div>
        );
    }
};

export default PostItem;

