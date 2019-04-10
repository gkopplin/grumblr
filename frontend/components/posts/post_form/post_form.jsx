import React from 'react';
import TextForm from './text_form';
import PhotoForm from './photo_form';
import VideoForm from './video_form';
import AudioForm from './audio_form';
import LinkForm from './link_form';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.resetMedia = this.resetMedia.bind(this);
        this.hideDelete = this.hideDelete.bind(this);
        this.revealDelete = this.revealDelete.bind(this);
        
        this.state = {
            content: "",
            mediaFile: null,
            mediaUrl: null,
            showDelete: false
        };
    }

    componentDidMount () {
        if (this.props.post &&
            this.props.post.post_type !== "text" &&
            this.props.post.post_type !== "link") {

            const fileButton = document.getElementById('file-button');
            const fileInput = document.getElementById('file-input');
            fileButton.addEventListener('click', () => {
                fileInput.click();
            });
            this.setState({mediaUrl: this.props.post.content});
        }
        this.setState({content: this.props.post.content});
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
        formData.append('post[author_id]', this.props.post.author_id);
        formData.append('post[post_type]', this.props.post.post_type);
        formData.append('page', "dashboard");

        if (this.state.mediaFile) {
            formData.append('post[media]', this.state.mediaFile);
        }

        this.props.processPost(formData, this.props.post.id);
    }

    resetMedia () {
        this.setState({ mediaUrl: "", mediaFile: null, showDelete: false });
    }

    revealDelete () {
        this.setState({ showDelete: true });
    }

    hideDelete () {
        const hover = $(".delete-icon").is(":hover");
        if (!hover) {
            this.setState({showDelete: false});
        }
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
        
    }

    render () {
            if (this.props.post === null) {
                return null;
            } else if (this.props.post.post_type === "text") {
                return (
                    <TextForm author = {this.props.author}
                                content = {this.state.content}
                                handleInput = {this.handleInput}
                                closeModal = {this.props.closeModal}
                                handleSubmit = {this.handleSubmit}
                                errors = {this.props.errors}
                                formType = {this.props.formType}/>
                );
            } else if (this.props.post.post_type === "photo") {
                return (
                    <PhotoForm author={this.props.author}
                        closeModal={this.props.closeModal}
                        handleSubmit={this.handleSubmit}
                        handleFile={this.handleFile}
                        errors={this.props.errors}
                        formType={this.props.formType} 
                        mediaUrl = {this.state.mediaUrl}
                        showDelete = {this.state.showDelete}
                        hideDelete = {this.hideDelete}
                        revealDelete = {this.revealDelete}
                        resetMedia = {this.resetMedia}/>
                );
            } else if (this.props.post.post_type === "video") {
                return (
                    <VideoForm author={this.props.author}
                        closeModal={this.props.closeModal}
                        handleSubmit={this.handleSubmit}
                        handleFile={this.handleFile}
                        errors={this.props.errors}
                        formType={this.props.formType}
                        mediaUrl={this.state.mediaUrl}
                        showDelete={this.state.showDelete}
                        hideDelete={this.hideDelete}
                        revealDelete={this.revealDelete}
                        resetMedia={this.resetMedia} />
                );
            } else if (this.props.post.post_type === "audio") {
                return (
                    <AudioForm author={this.props.author}
                        closeModal={this.props.closeModal}
                        handleSubmit={this.handleSubmit}
                        handleFile={this.handleFile}
                        errors={this.props.errors}
                        formType={this.props.formType}
                        mediaUrl={this.state.mediaUrl}
                        showDelete={this.state.showDelete}
                        hideDelete={this.hideDelete}
                        revealDelete={this.revealDelete}
                        resetMedia={this.resetMedia} />
                );
            } else if (this.props.post.post_type === "link") {
                return (
                    <LinkForm author={this.props.author}
                        content={this.props.post.content}
                        handleInput={this.handleInput}
                        closeModal={this.props.closeModal}
                        handleSubmit={this.handleSubmit}
                        errors={this.props.errors}
                        formType={this.props.formType} />
                );
            }

            
        } 

}

export default PostForm;