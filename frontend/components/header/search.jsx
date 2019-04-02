import React from 'react';
import {connect} from 'react-redux';
import SearchResults from './search-results';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            search: "",
            users: [],
            showResults: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleSubmit (e) {
        // this.props.fetchPosts(null, null, this.state.search);
    }

    handleInput(e) {
        this.setState({search: e.target.value});
        if (e.target.value) {
            this.props.fetchPosts(null, null, this.state.search);
            this.setState({showResults: true});
        }
    }

    componentDidUpdate(prevProps) {
        document.addEventListener("click", e => {
            if (e.target.className !== "search-bar") {
                this.setState({ showResults: false });
            }
        });

        if (this.props.users !== prevProps.users &&
                this.showResults) {
            this.setState({users: this.props.users});
        }

    }

    render () {
        return (
            <>
            <form onSubmit={this.handleSubmit} className="search-bar">
                <input type="text" onChange={this.handleInput} value={this.state.search} placeholder="Search Grumblr"/>
            </form>
            <SearchResults showResults = {this.state.showResults} users = {this.state.users} page = {this.props.page}/>
            </>
        );
    }
}

const msp = state => {
    return {
        users: Object.values(state.entities.users)
    }
}

const mdp = dispatch => {
    return {
        fetchPosts: (page, userId, search) => dispatch(fetchPosts(page, userId, search))
    }
}

export default connect(msp, mdp)(Search);