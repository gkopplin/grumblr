import React from 'react';

export default props => {
    return (
        <div className="post-form-container">
            <span className="post-author">{props.author.username}</span>
            <form className="post-form">
            {props.formType === "update" ? (
                <textarea type="text" value={props.content}
                    onChange={props.handleInput("content")}
                    className="text-box"></textarea>
            ) : (
                <textarea type="text" placeholder="Your text here"
                    onChange={props.handleInput("content")}
                    className="text-box"></textarea>
            )}
                <div className="post-form-buttons">
                    <button onClick={() => props.closeModal()}>Close</button>
                    <input type="submit" value="Save" onClick={props.handleSubmit} />
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

