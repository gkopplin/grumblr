import React from 'react';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);

        this.state = {
            post_type: "text",
            content: "default",
            author_id: this.props.author.id,
            imageFile: null,
            imageUrl: null
        };
    }

    componentDidMount () {
        this.setState({
            post_type: this.props.post.post_type,
            content: this.props.post.content,
            author_id: this.props.post.author_id,
            imageFile: this.props.post.photo
        });
        
    }

    handleInput(field) {
        return e => {
            this.setState({ [field]: e.target.value });
        };
    }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     this.props.processPost(this.state);
    // }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[content]', this.state.content);
        formData.append('post[author_id]', this.state.author_id);
        formData.append('post[post_type]', this.state.post_type);
        formData.append('page', "dashboard");

        if (this.state.imageFile) {
            formData.append('post[photo]', this.state.imageFile);
        }

        this.props.processPost(formData);
        
    }

    handleFile(e) {
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () =>
            this.setState({ imageUrl: reader.result, imageFile: file });

        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ imageUrl: "", imageFile: null });
        }
        // why need imageFile?
    }

    render () {
        // refactor this
        if (this.props.formType === "update") {
            if (this.state.post_type === "text") {

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
            } else if (this.state.post_type === "photo") {
                return (
                    <div className="post-form-container">
                        <span className="post-author">{this.props.author.username}</span>
                        <form className="post-form">
                            <textarea type="text" value={this.state.content}
                                onChange={this.handleInput("content")}
                                className="text-box"></textarea>
                            <div className="post-form-buttons">
                                <button onClick={() => this.props.closeModal()}>Close</button>
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
            }
        } else {
            if (this.state.post_type === "text") {
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
            } else if (this.state.post_type === "photo") {
                return (
                    <div className="post-form-container">
                        <span className="post-author">{this.props.author.username}</span>
                        <form className="post-form">
                            <input type="file" onChange={this.handleFile}/>
                            <img src={this.state.imageUrl}/>
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
}

export default PostForm;