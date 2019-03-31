import React from 'react';
import {openModal} from '../../actions/modal_actions';
import {connect} from 'react-redux';

class PostIcons extends React.Component {

    constructor(props){
        super(props);
        this.state = {visible: false};
    }

    render () {
        return (
            <div className="post-container">
                <img src={window.profilePic} className="profile-pic" />
                <div className="post-icons">
                    <div onClick={() => this.props.openModal("create")}>
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
            </div>
        );
    }
};

const mdp = dispatch => {
    return {
        openModal: (modal) => dispatch(openModal(modal))
    }
}

export default connect(null, mdp)(PostIcons);