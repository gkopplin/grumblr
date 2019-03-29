import React from 'react';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.props.post ? this.props.post : {
            post_type: "text",
            content: "",
            author_id: this.props.author.id
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
        debugger
        if (this.props.formType === "update") {
            return (
                <div className="post-form-container">
                    <span className="post-author">{this.props.author.username}</span>
                    <form className="post-form">
                        <input type="text" value={this.state.content}
                            onChange={this.handleInput("content")} />
                        <input type="submit" value="Save" onClick={this.handleSubmit} />
                    </form>
                    <ul className="errors">
                        {this.props.errors.map((error, i) => (
                            <li key={`error-${i}`}>
                                {error}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        } else {
            return (
                <div className="post-form-container">
                    <span className="post-author">{this.props.author.username}</span>
                    <form className="post-form">
                        <input type="text" placeholder="Your text here"
                            onChange={this.handleInput("content")} />
                        <input type="submit" value="Submit" onClick={this.handleSubmit}/>
                    </form>
                    <ul className="errors">
                        {this.props.errors.map((error, i) => (
                            <li key={`error-${i}`}>
                                {error}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }



    }
}

export default PostForm;