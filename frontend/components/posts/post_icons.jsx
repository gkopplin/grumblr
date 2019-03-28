import React from 'react';
import PostModal from './post_modal';

class PostIcons extends React.Component {

    constructor(props){
        super(props);
        this.state = {visible: false};
        this.openModal = this.openModal.bind(this);
    }

    openModal() {
        this.setState({ visible: true });
    }


    render () {
        return (
            <>
            <div className="post-icons">
                <div onClick={() => this.openModal()}>
                    <span className="text-icon">Aa</span>
                    <span>Text</span>
                </div>
                <div>
                    <span className="text-icon">tbd</span>
                    <span>Photo</span>
                </div>
                <div>
                    <span className="text-icon">tbd</span>
                    <span>Quote</span>
                </div>
                <div>
                    <span className="text-icon">tbd</span>
                    <span>Link</span>
                </div>
                <div>
                    <span className="text-icon">tbd</span>
                    <span>Chat</span>
                </div>
                <div>
                    <span className="text-icon">tbd</span>
                    <span>Audio</span>
                </div>
                <div>
                    <span className="text-icon">tbd</span>
                    <span>Video</span>
                </div>
            </div>

            <PostModal visible = {this.state.visible} />
            </>
        );
    }
};

export default PostIcons;