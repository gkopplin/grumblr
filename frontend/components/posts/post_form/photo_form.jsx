import React from 'react';
import NewPhotoIcon from '../post_icons/new_photo_icon';
import DeleteIcon from '../post_icons/delete_icon';

export default props => {
    return (
        <div className="post-form-container">
            <span className="post-author">{props.author.username}</span>
            <form className="post-form">
                <div className={props.mediaUrl ? "hidden" : "file-input-container"}>
                    <div id="file-button">
                        <NewPhotoIcon />
                        <span>Upload photo</span>
                    </div>
                    <input type="file" onChange={props.handleFile} id="file-input" />
                </div>
                <DeleteIcon show={props.showDelete} resetMedia={props.resetMedia} />
                <img src={props.mediaUrl} onMouseEnter={() => props.revealDelete()} 
                     onMouseLeave={() => props.hideDelete()} className="post-img"/>
                <div className="post-form-buttons">
                    <button onClick={() => props.closeModal()}>Close</button>
                    <input type="submit" value="Post" onClick={props.handleSubmit} />
                </div>
            </form>
            <ul className="errors">
                {props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        </div>
    );
};