import React from 'react';
import Modal from 'react-modal';

class postModal extends React.Component {
    constructor (props) {
        super(props);
        this.state = {visible: this.props.visible};
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidUpdate (prevProps) {
        if (prevProps.visible != this.props.visible) {
            this.setState({visible: this.props.visible});
        }
    }

    closeModal() {
        this.setState({ visible: false });
    }

    render () {
        return (
            <Modal isOpen = {this.state.visible} width="300" height="300">
                <button onClick={() => this.closeModal()}>Close</button>
            </Modal>
        );
    }
};

export default postModal;