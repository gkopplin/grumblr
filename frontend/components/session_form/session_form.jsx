import React from 'react';
import {connect} from 'react-redux';
import {removeUsers} from '../../actions/user_actions';


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

    render () {
        return (
            <div className = "session-container">
                <form className="session-form" onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" value={this.state.username ? this.state.username : ""}
                            onChange={this.handleInput("username")}
                            onClick={() => this.setState({ username: "" })}
                            id="input-username" placeholder="Username" />
                    </label><br/>

                    <label>
                        <input type="text" value={this.state.email ? this.state.email : ""}
                            onChange={this.handleInput("email")}
                            onClick={() => this.setState({ email: "" })}
                            id="input-email" placeholder="Email"/>                        
                    </label><br/>

                    <label>
                        <input type="password" 
                            onChange={this.handleInput("password")} 
                            onClick={() => this.setState({ password: "" })}
                            placeholder="Password"/>
                    </label><br/>

                    <ul className="errors">
                        {this.props.errors.map((error, i) => (
                            <li key={`error-${i}`}>
                                {error}
                            </li>
                        ))}
                    </ul>

                    <input type="submit" value={this.props.formType} 
                        className={`button-${this.props.formType}`}/>
                </form>
            </div>
        );
    }
}

const mdp = dispatch => {
    return {
        removeUsers: () => dispatch(removeUsers())
    }
}


export default connect(null, mdp)(sessionForm);