import React from 'react';
import {connect} from 'react-redux';
import {fetchSearchResults} from '../../actions/search_actions';
import {openModal, closeModal} from '../../actions/modal_actions';
import SearchIcon from './header-icons/search-icon';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            search: "",
            users: []
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearSearch = this.clearSearch.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = this.props.users[0];
        this.clearSearch();
        return this.props.page === 'profile' ? this.props.history.push(`${user.id}`) :
                                               this.props.history.push(`users/${user.id}`);
    }

    handleInput(e) {
        this.setState({search: e.target.value});
        if (e.target.value) {
            this.props.fetchSearchResults(e.target.value);
            this.props.openModal("search-results", {users: this.state.users, page: this.props.page, clearSearch: this.clearSearch});
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.users !== prevProps.users &&
                this.state.search !== "") {
            this.setState({users: this.props.users});
        }

    }

    clearSearch () {
        this.setState({search: ""});
        this.props.closeModal();

    }

    render () {
        return (
            <div className="search-container">
                <SearchIcon/>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" className="search-bar"
                                    onChange={this.handleInput} 
                                    value={this.state.search} 
                                    placeholder="Search Grumblr"/>
                </form>
            </div>
        );
    }
}

const msp = state => {
    return {
        users: state.ui.search ? Object.values(state.ui.search) : []
    }
}

const mdp = dispatch => {
    return {
        fetchSearchResults: (search) => dispatch(fetchSearchResults(search)),
        openModal: (modal, data) => dispatch(openModal(modal, data)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(msp, mdp)(Search);