import React from 'react';
import NewPhotoIcon from './new_photo_icon';
import NewVideoIcon from './new_video_icon';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);

        this.state = this.props.post ? {
            id: this.props.post.id,
            post_type: this.props.post.post_type,
            content: this.props.post.content,
            author_id: this.props.post.author_id,
            mediaFile: this.props.post.media
        } : {
            id: null,
            post_type: "text",
            content: "default",
            author_id: this.props.author.id,
            mediaFile: null,
            mediaUrl: null
        };
    }

    componentDidMount () {
        if (this.props.post.post_type !== "text") {

            const fileButton = document.getElementById('file-button');
            const fileInput = document.getElementById('file-input');
            fileButton.addEventListener('click', () => {
                fileInput.click();
            });
        }
    }

    handleInput(field) {
        return e => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[content]', this.state.content);
        formData.append('post[author_id]', this.state.author_id);
        formData.append('post[post_type]', this.state.post_type);
        formData.append('page', "dashboard");

        if (this.state.mediaFile) {
            formData.append('post[media]', this.state.mediaFile);
        }

        this.props.processPost(formData, this.state.id);
    }

    handleFile(e) {
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () =>
            this.setState({ mediaUrl: reader.result, mediaFile: file });

        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ mediaUrl: "", mediaFile: null });
        }
        // why need mediaFile?
        
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
                            <div className="file-input-container">
                                <div id="file-button">
                                    <NewPhotoIcon />
                                    <span>Upload photo</span>
                                </div>
                                <input type="file" onChange={this.handleFile} id="file-input"/>
                            </div>
                            <img src={this.state.mediaUrl} />
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
            } else if (this.state.post_type === "video") {
                return (
                    <div className="post-form-container">
                        <span className="post-author">{this.props.author.username}</span>
                        <form className="post-form">
                            <div className="file-input-container">
                                <div id="file-button">
                                    <NewVideoIcon />
                                    <span>Upload video</span>
                                </div>
                                <input type="file" onChange={this.handleFile} id="file-input" />
                            </div>
                            <video src={this.state.mediaUrl}></video>
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
                            <div className="file-input-container">
                                <div id="file-button">
                                    <NewPhotoIcon />
                                    <span>Upload photo</span>
                                </div>
                                <input type="file" onChange={this.handleFile} id="file-input" />
                            </div>
                            <img src={this.state.mediaUrl}/>
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
            } else if (this.state.post_type === "video") {
                return (
                    <div className="post-form-container">
                        <span className="post-author">{this.props.author.username}</span>
                        <form className="post-form">
                            <div className="file-input-container">
                                <div id="file-button">
                                    <NewVideoIcon />
                                    <span>Upload video</span>
                                </div>
                                <input type="file" onChange={this.handleFile} id="file-input" />
                            </div>
                            <video src={this.state.mediaUrl}></video>
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