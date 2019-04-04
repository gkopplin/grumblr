import React from 'react';
import { connect } from 'react-redux';
import {fetchUsers} from '../actions/user_actions';
import {deleteFollow} from '../actions/follow_actions';
import ProfilePic from './posts/profile_picture';

class UsersIndex extends React.Component {
    componentDidMount () {
        this.props.fetchUsers(this.props.followers);
    }
    
    render() {
        let users = this.props.users.filter(user => user.id !== this.props.currentUser);

        users = users.map(user => {
            return (<div className="user" key={user.id}>
                        <div>
                            <ProfilePic username={user.username} small={true} />
                            <span>{user.username}</span>
                        </div>
                        {this.props.followers === false &&
                        <button className="unfollow-border" onClick={() => {
                            this.props.deleteFollow(user.id);}}>Unfollow</button>}
                    </div>)
        })

        return (
            <ul className="following">
                {users}
            </ul>
        );
    }
}

const msp = (state) => {
    return {
        users: Object.values(state.entities.users),
        currentUser: state.session.currentUser
    };
};

const mdp = dispatch => {
    return {
        fetchUsers: followers => dispatch(fetchUsers(followers)),
        deleteFollow: id => dispatch(deleteFollow(id))
    };
};

export default connect(msp, mdp)(UsersIndex);