import React from 'react';
import {connect} from 'react-redux';
import SearchResults from './search-results';
import {fetchSearchResults} from '../../actions/search_actions';

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
            this.props.fetchSearchResults(this.state.search);
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
                this.state.showResults) {
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
        users: state.ui.search.authors ? Object.values(state.ui.search.authors) : []
    }
}

const mdp = dispatch => {
    return {
        fetchSearchResults: (search) => dispatch(fetchSearchResults(search))
    }
}

export default connect(msp, mdp)(Search);