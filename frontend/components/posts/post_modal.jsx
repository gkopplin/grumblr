import React from 'react';
import UpdatePostForm from './post_form/update_post_container';
import CreatePostForm from './post_form/create_post_container';
import {connect} from 'react-redux';
import {closeModal} from '../../actions/modal_actions';


class PostModal extends React.Component {
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
            case 'create':
                return this.setState({ component: <CreatePostForm />});
            case 'update':
                return this.setState({ component: <UpdatePostForm/> });
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
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);
