import React from 'react';
import { connect } from 'react-redux';
import {fetchUsers} from '../actions/user_actions';
import {deleteFollow} from '../actions/follow_actions';
import ProfilePic from './posts/profile_picture';
import {Link} from 'react-router-dom';

class UsersIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {users: this.props.users};
    }

    componentDidMount () {
        this.props.fetchUsers(this.props.followers);
    }

    // componentDidUpdate(prevProps){
    //     if (this.props.follows !== prevProps.users.follows) {
    //         this.props.fetchUsers(this.props.followers);
    //         this.setState({users: this.props.users});
    //     }
    // }
    
    render() {
        let users = this.props.users.filter(user => user.id !== this.props.currentUser);
        if (this.props.followers === false) {
            users = users.filter(user => {
                return (this.props.follows[user.id] === undefined ||
                    this.props.follows[user.id].includes(this.props.currentUser));
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
        deleteFollow: id => dispatch(deleteFollow(id))
    };
};

export default connect(msp, mdp)(UsersIndex);