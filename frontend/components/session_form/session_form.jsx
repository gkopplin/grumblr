import React from 'react';

class sessionForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
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
            <div className = "session-form-container">
                <h2>{this.props.formType}</h2>
                <form className="session-form" onSubmit={this.handleSubmit}>
                    <label>Username:
                        <input type="text" value = {this.state.username} onChange={this.handleInput("username")}/>
                    </label>
                    <label>Email:
                        <input type="text" value = {this.state.email} onChange={this.handleInput("email")}/>
                    </label>
                    <label>Password:
                        <input type="password" value = {this.state.password} onChange={this.handleInput("password")}/>
                    </label>
                    <input type="submit" value={this.props.formType}/>
                </form>
            </div>
        );
    }
}

export default sessionForm;