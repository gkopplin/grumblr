import { connect } from 'react-redux';
import sessionForm from './session_form';
import { login } from '../../actions/session_actions';


const msp = ({ errors }) => {
    return {
        formType: "Log In"
    };
};

const mdp = dispatch => {
    return {
        processSession: user => dispatch(login(user))
    };
};

export default connect(msp, mdp)(sessionForm);