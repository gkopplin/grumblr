import React from 'react';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.props.post ? this.props.post : {
            post_type: "text",
            content: null,
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
    }

    render () {
        if (this.props.formType === "update") {
            return (
                <div className="post-form-container">
                    <span className="post-author">{this.props.author.username}</span>
                    <form className="post-form">
                        <textarea type="text" value={this.state.content}
                            onChange={this.handleInput("content")} 
                            className="text-box"></textarea>
                        <div className="post-form-buttons">
                            <button onClick= {() => this.props.closeModal()}>Close</button>
                            <input type="submit" value="Save" onClick={this.handleSubmit} />
                        </div>
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
                        <textarea type="text" placeholder="Your text here"
                            onChange={this.handleInput("content")} 
                            className="text-box"></textarea>
                        <div className="post-form-buttons">
                            <button onClick={() => this.props.closeModal()}>Close</button>
                            <input type="submit" value="Post" onClick={this.handleSubmit} />
                        </div>
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