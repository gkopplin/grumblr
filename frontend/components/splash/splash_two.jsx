import React from 'react';
import NoLinkIcons from '../posts/post_icons/no_link_icons';
import NoLinkPost from '../posts/no_link_post';

export default props => {
    return (
        <>
        <div className={props.direction ? `splash-${props.direction}` : "splash-container"}>

            <div className="splash-bg" style={{ backgroundColor: "#001835" }}></div>
            <div className="splash-2">
                <div className="sample-post-container">

                    <div className="sample-post">
                        <NoLinkIcons />
                        
                        <NoLinkPost post={props.firstPost}
                            author={props.author} />
                        
                    </div>
                </div>
                <div className="splash-text">
                    <h1>You already know how this works.</h1>
                    <p>When you follow someone, you'll see all of their
                        latest grumblings on your dashboard, just like you'd
                        expect. Like other people's complaints to let them
                        know you share their frustration. Search for
                        users to follow to find your new favorite curmudgeon.
                        </p>
                </div>

            </div>
        </div>
        <div className="filler"></div>
        </>
    );
};