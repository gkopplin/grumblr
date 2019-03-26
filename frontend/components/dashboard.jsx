import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';

const Dashboard = (props) => {
    return (
        <button onClick={props.logout}>Log Out</button>
    );
};

const mdp = dispatch => {
    return {
        logout: () => dispatch(logout())
    };
};

export default connect(null, mdp)(Dashboard);