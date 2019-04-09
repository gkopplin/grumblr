import React from 'react';

export default props => {
    return (
        <div className="post-form-container">
            <span className="post-author">{props.author.username}</span>
            <form className="post-form">
                {props.formType === "update" ? (
                    <input type="text" value={props.content}
                        onChange={props.handleInput("content")}
                        className="link-box"></input>
                ) : (
                    <input type="text" placeholder="Type or paste a URL"
                        onChange={props.handleInput("content")}
                        className="link-box"></input>
                    )}
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

