import React from 'react';
import PhotoIcon from '../posts/post_icons/photo_icon';
import VideoIcon from '../posts/post_icons/video_icon';
import AudioIcon from '../posts/post_icons/audio_icon';
import LinkIcon from '../posts/post_icons/link_icon';

export default props => {
    return (
        <div className={props.direction ? `splash-${props.direction}` : "splash-container"}>

            <div className="splash-bg" style={{ backgroundColor: "#FF9632" }}></div>
            <div className="splash-3">
                <div className={(props.direction === "down1-3" ||
                                    props.direction === "down2-3") ? 
                                    "fadeIn sample-icons" : "sample-icons"}>
                    <div className="icons-row">
                        <div>
                            <span className="text-icon" id= "splash-text-icon">Aa</span>
                            <span>Text</span>
                        </div>
                        <div>
                            <PhotoIcon fill={"#FFFFFF"}/>
                            <span>Photo</span>
                        </div>
                    </div>
                    <div className="icons-row"> 
                        <div>
                            <VideoIcon fill={"#FFFFFF"}/>
                            <span>Video</span>
                        </div>
                        <div>
                            <LinkIcon fill={"#FFFFFF"}/>
                            <span>Link</span>
                        </div>
                        <div>
                            <AudioIcon fill={"#FFFFFF"}/>
                            <span>Audio</span>
                        </div>
                    </div>
                </div>
                <div className="splash-text3">
                    <h1>Complain using any medium you want</h1>
                    <p>Grumblr has functionality for five different types
                        of posts. <br/>
                        Airing your grievances should be a creative
                        process unhampered by technology.
                    </p>
                </div>

            </div>
        </div>
    );
};