import React from 'react';
import {openModal} from '../../../actions/modal_actions';
import {connect} from 'react-redux';
import ProfilePic from '../profile_picture';
import {Link} from 'react-router-dom';
import PhotoIcon from './photo_icon';
import VideoIcon from './video_icon';
import LinkedInIcon from './linked_in_icon';
import GithubIcon from './github_icon';
import AudioIcon from './audio_icon';
import LinkIcon from './link_icon';

class PostIcons extends React.Component {

    constructor(props){
        super(props);
        this.state = {visible: false};
    }

    render () {
        return (
            <div className="post-container">
                <div className="profile-container">
                    <Link to={this.props.page === 'profile' ? `${this.props.currentUser.id}` : `users/${this.props.currentUser.id}`}>
                        <ProfilePic user={this.props.currentUser} />
                    </Link>
                </div>
                <div className="post-icons">
                    <div onClick={() => this.props.openModal("create", {post: {post_type: "text", author_id: this.props.currentUser.id}})}>
                        <span className="text-icon">Aa</span>
                        <span>Text</span>
                    </div>
                    <div onClick={() => this.props.openModal("create", { post: { post_type: "photo", author_id: this.props.currentUser.id } })}>
                        <PhotoIcon />
                        <span>Photo</span>
                    </div>
                    <div onClick={() => this.props.openModal("create", { post: { post_type: "video", author_id: this.props.currentUser.id } })}>
                        <VideoIcon />
                        <span>Video</span>
                    </div>
                    <div onClick={() => this.props.openModal("create", { post: { post_type: "link", author_id: this.props.currentUser.id } })}>
                        <LinkIcon />
                        <span>Link</span>
                    </div>
                    <div onClick={() => this.props.openModal("create", { post: { post_type: "audio", author_id: this.props.currentUser.id } })}>
                        <AudioIcon />
                        <span>Audio</span>
                    </div>
                    <div id="linkedin">
                        <a href="https://www.linkedin.com/in/grant-kopplin/">
                            <LinkedInIcon/>
                        </a>
                        <span>LinkedIn</span>
                    </div>
                    <div>
                        <a href="https://github.com/gkopplin">
                            <GithubIcon />
                        </a>
                        <span>Github</span>
                    </div>
                </div>
            </div>
        );
    }
};

const mdp = dispatch => {
    return {
        openModal: (modal, data) => dispatch(openModal(modal, data))
    }
}

export default connect(null, mdp)(PostIcons);