import React from 'react';
import ProfilePic from '../profile_picture';
import PhotoIcon from './photo_icon';
import VideoIcon from './video_icon';
import LinkedInIcon from './linked_in_icon';
import GithubIcon from './github_icon';
import AudioIcon from './audio_icon';
import LinkIcon from './link_icon';

class NoLinkIcons extends React.Component {

    constructor(props){
        super(props);
        this.state = {visible: false};
    }

    render () {
        return (
            <div className="post-container">
                <div className="profile-container">
                        <ProfilePic user={{profilePic: null}} />
                </div>
                <div className="post-icons">
                    <div>
                        <span className="text-icon">Aa</span>
                        <span>Text</span>
                    </div>
                    <div>
                        <PhotoIcon />
                        <span>Photo</span>
                    </div>
                    <div>
                        <VideoIcon />
                        <span>Video</span>
                    </div>
                    <div>
                        <LinkIcon />
                        <span>Link</span>
                    </div>
                    <div>
                        <AudioIcon />
                        <span>Audio</span>
                    </div>
                    <div id="linkedin">
                        <a href="#">
                            <LinkedInIcon/>
                        </a>
                        <span>LinkedIn</span>
                    </div>
                    <div>
                        <a href="#">
                            <GithubIcon />
                        </a>
                        <span>Github</span>
                    </div>
                </div>
            </div>
        );
    }
};



export default NoLinkIcons;