import {connect} from 'react-redux';
import sessionForm from './session_form';
import {signup} from '../../actions/session_actions';


const msp = ({errors}) => {
    return {
        formType: "Sign Up"
    };
};

const mdp = dispatch => {
    return {
        processSession: user => dispatch(signup(user))
    };
};

export default connect(msp, mdp)(sessionForm);