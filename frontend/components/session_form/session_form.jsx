import React from 'react';

class sessionForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            username: "Username",
            email: "Email",
            password: "Password"
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput (field) {
        return e => {
            this.setState({[field]: e.target.value});
        };
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.processSession(this.state);
    }

    renderErrors() {
        return(
        <ul>
            {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
                {error}
            </li>
            ))}
        </ul>
        );
    }

    render () {
        return (
            <div className="splash" style={{ backgroundImage: `url(${window.splashBG})` }}>
                <div className = "session-container">
                    <h1 className="main-logo">grumblr</h1>
                    <form className="session-form" onSubmit={this.handleSubmit}>
                        <label>
                            <input type="text" value = {this.state.username} 
                                onChange={this.handleInput("username")} onClick={() => this.setState({username: ""})}/>
                        </label><br/>

                        <label>
                            <input type="text" value = {this.state.email} 
                                onChange={this.handleInput("email")} onClick={() => this.setState({ email: "" })}/>
                        </label><br/>

                        <label>
                            <input type="password" value = {this.state.password} 
                                onChange={this.handleInput("password")} onClick={() => this.setState({ password: "" })}/>
                        </label><br/>

                        <input type="submit" value={this.props.formType} 
                            className={`button-${this.props.formType}`}/>
                    </form>
                </div>
            </div>
        );
    }
}

export default sessionForm;