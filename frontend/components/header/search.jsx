import React from 'react';
import {connect} from 'react-redux';
import SearchResults from './search-results';
import {fetchSearchResults} from '../../actions/search_actions';
import {openModal, closeModal} from '../../actions/modal_actions';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            search: "",
            users: []
        };
        this.handleInput = this.handleInput.bind(this);
        this.clearSearch = this.clearSearch.bind(this);
    }

    handleInput(e) {
        this.setState({search: e.target.value});
        if (e.target.value) {
            this.props.fetchSearchResults(e.target.value);
            this.props.openModal("search-results");
        }
    }

    componentDidUpdate(prevProps) {
        // document.addEventListener("click", e => {
        //     if (e.target.className !== "search-bar") {
        //         this.props.closeModal();
        //     }
        // });

        if (this.props.users !== prevProps.users &&
                this.state.search !== "") {
            this.setState({users: this.props.users});
        }

    }

    clearSearch () {
        this.setState({search: ""});
    }

    render () {
        return (
            <>
            <form onSubmit={this.handleSubmit} className="search-form">
                <input type="text" className="search-bar"
                                   onChange={this.handleInput} 
                                   value={this.state.search} 
                                   placeholder="Search Grumblr"/>
            </form>
            {/* <SearchResults users = {this.state.users} 
                           page = {this.props.page}
                           clearSearch = {this.clearSearch}/> */}
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
        fetchSearchResults: (search) => dispatch(fetchSearchResults(search)),
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(msp, mdp)(Search);