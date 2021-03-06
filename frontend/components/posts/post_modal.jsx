import React from 'react';
import UpdatePostForm from './post_form/update_post_container';
import CreatePostForm from './post_form/create_post_container';
import DeletePostForm from './post_form/delete_post_form';
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
            case 'delete':
                return this.setState({component: <DeletePostForm />});
            default:
                return this.setState({ component: null });

        }
    }

    render() {
        return (
            <div className={`post-modal-background ${this.state.component ? "": "hidden"}`} onClick={this.props.closeModal}>
                <div className="post-modal-child" onClick={e => e.stopPropagation()}>
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

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);
