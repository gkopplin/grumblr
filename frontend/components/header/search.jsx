import React from 'react';
import {connect} from 'react-redux';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {search: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (e) {
        this.props.fetchPosts(null, null, this.state.search);
    }

    handleInput(e) {
        this.setState({search: e.target.value});
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleInput} value={this.state.search} placeholder="Search Grumblr"/>
            </form>
        );
    }
}

const mdp = dispatch => {
    return {
        fetchPosts: (page, userId, search) => dispatch(fetchPosts(page, userId, search))
    }
}

export default connect(null, mdp)(Search);