import React from 'react';
import { connect } from 'react-redux';
import {fetchUsers} from '../actions/user_actions';
import {requestFollowing} from '../actions/follow_actions';
import {deleteFollow} from '../actions/follow_actions';
import ProfilePic from './posts/profile_picture';
import {Link} from 'react-router-dom';

class UsersIndex extends React.Component {

    componentDidMount () {
        this.props.fetchUsers(this.props.followers);
        if (this.props.followers === false) {
            this.props.requestFollowing(this.props.currentUser);
        }
    }
    
    render() {
        let users = this.props.users.filter(user => user.id !== this.props.currentUser);
        if (this.props.followers === false) {
            users = users.filter(user => {
                return (this.props.follows[user.id] !== undefined &&
                    this.props.follows[user.id].includes(this.props.currentUser));
                });
        } else {
            users = users.filter(user => {
                return (this.props.follows[this.props.currentUser] !== undefined &&
                    this.props.follows[this.props.currentUser].includes(user.id));
                });

        }

        users = users.map(user => {
            return (<div className="user" key={user.id}>
                        <Link to={`users/${user.id}`}>
                            <ProfilePic username={user.username} small={true} />
                            <span>{user.username}</span>
                        </Link>
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
        follows: state.entities.follows,
        users: Object.values(state.entities.users),
        currentUser: state.session.currentUser
    };
};

const mdp = dispatch => {
    return {
        fetchUsers: followers => dispatch(fetchUsers(followers)),
        deleteFollow: id => dispatch(deleteFollow(id)),
        requestFollowing: id => dispatch(requestFollowing(id))
    };
};

export default connect(msp, mdp)(UsersIndex);