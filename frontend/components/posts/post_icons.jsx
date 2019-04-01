import React from 'react';
import {openModal} from '../../actions/modal_actions';
import {connect} from 'react-redux';
import ProfilePic from './profile_picture';
import {Link} from 'react-router-dom';

class PostIcons extends React.Component {

    constructor(props){
        super(props);
        this.state = {visible: false};
    }

    render () {
        return (
            <div className="post-container">
                <div className="profile-container">
                    <Link to={this.props.page === 'dashboard' ? `users/${this.props.currentUser.id}` : `${this.props.currentUser.id}`}>

                        <ProfilePic username={this.props.currentUser.username} />
                    </Link>
                </div>
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