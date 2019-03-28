import React from 'react';
import { connect } from 'react-redux';
import {createPost} from '../../actions/post_actions';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post_type: "text",
            content: "",
            author_id: this.props.author.id
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(field) {
        return e => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createPost(this.state);
        this.props.closeModal();
    }

    render () {
        return (
            <div className="post-form-container">
                <span className="post-author">{this.props.author.username}</span>
                <form className="post-form">
                    <input type="text" placeholder="Your text here"
                        onChange={this.handleInput("content")} />
                    <input type="submit" value="Submit" onClick={this.handleSubmit}/>
                </form>
            </div>
        );
    }
}

const msp = state => {
    return {
        author: state.entities.users[state.session.currentUser]
    };
};

const mdp = dispatch => {
    return {
        createPost: (post) => dispatch(createPost(post))
    };
};

export default connect(msp,mdp)(PostForm);