import React from 'react';
import { connect } from 'react-redux';
import {fetchUsers} from '../actions/user_actions';
import {deleteFollow} from '../actions/follow_actions';

class UsersIndex extends React.Component {
    componentDidMount () {
        this.props.fetchUsers(this.props.followers);
    }
    
    render() {
        const users = this.props.users.map(user => {
            return (<div className="user" key={user.id}>
                        <span>{user.username}</span>
                        {this.props.followers === false &&
                        <button className="unfollow" onClick={() => {
                            this.props.deleteFollow(user.id);}}>Unfollow</button>}
                    </div>);
        });

        return (
            <ul>
                {users}
            </ul>
        );
    }
}

const msp = (state) => {
    return {
        users: Object.values(state.entities.users)
    };
};

const mdp = dispatch => {
    return {
        fetchUsers: followers => dispatch(fetchUsers(followers)),
        deleteFollow: id => dispatch(deleteFollow(id))
    };
};

export default connect(msp, mdp)(UsersIndex);