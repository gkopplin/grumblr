import React from 'react';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.props.post ? this.props.post : {
            post_type: "text",
            content: "",
            author_id: this.props.currentUser
        };
    }

    handleInput(field) {
        return e => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processPost(this.state);
        this.props.closeModal();
    }

    render () {
        return (
            <div className="post-form-container">
                <span className="post-author">{this.props.author.username}</span>
                <form className="post-form">
                    <input type="text" placeholder={this.props.formType === "update" ? this.state.content : "Your text here"}
                        onChange={this.handleInput("content")} value={this.props.formType === "update" ? this.state.content : ""}/>
                    <input type="submit" value={this.props.formType === "update" ? "Save" : "Submit"} onClick={this.handleSubmit}/>
                </form>
            </div>
        );
    }
}

export default PostForm;