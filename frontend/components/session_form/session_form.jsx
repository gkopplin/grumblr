import React from 'react';
import Header from '../header/header';
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
            <>
            <Header loggedIn={false} formType={this.props.formType}/>
            <div className="splash-bg" style={{ backgroundImage: `url(${window.splashBG})` }}></div>
            <div className="splash">
                <div className = "session-container">
                    <h1 className="main-logo">grumblr</h1>
                    <p className="tag-line">For everything you love to hate</p>
                    <form className="session-form" onSubmit={this.handleSubmit}>
                        <label>
                            <input type="text" value = {this.state.username} 
                                onChange={this.handleInput("username")} 
                                onClick={() => this.setState({username: ""})}
                                placeholder="Username" id="input-username"/>
                        </label><br/>

                        <label>
                            <input type="text" value = {this.state.email} 
                                onChange={this.handleInput("email")} 
                                onClick={() => this.setState({ email: "" })}
                                placeholder="Email" id="input-email"/>
                        </label><br/>

                        <label>
                            <input type="password" value = {this.state.password} 
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
            </div>
            </>
        );
    }
}

const mdp = dispatch => {
    return {
        removeUsers: () => dispatch(removeUsers())
    }
}


export default connect(null, mdp)(sessionForm);