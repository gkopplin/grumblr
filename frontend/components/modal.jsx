import React from 'react';
import {connect} from 'react-redux';
import {closeModal} from '../actions/modal_actions';
import ProfileDropdown from './header/profile-dropdown';
import SearchResults from './header/search-results';

class Modal extends React.Component {
    constructor(props){
        super(props);
        this.state = {component: null};
    }

    componentDidMount () {
        this.checkModal();
    }

    componentDidUpdate (prevProps){
        if (prevProps.modal !== this.props.modal) {
            this.checkModal();
        }
    }
   
    checkModal () {
        if (!this.props.modal) {
            return this.setState({component: null});
        }
        switch (this.props.modal) {
            case "profile-dropdown":
                return this.setState({ component: <ProfileDropdown /> });
            case "search-results":
                return this.setState({ component: <SearchResults /> });
            default:
                return this.setState({ component: null });
        }
    }

    render() {
        return (
            <div className={`modal-background ${this.state.component ? "": "hidden"}`} onClick={this.props.closeModal}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    {this.state.component}
                </div>
            </div>
        );
    }


}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal.name
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
