import {connect} from 'react-redux';
import SessionForm from './session_form';
import {Link} from 'react-router-dom';
import {signup} from '../../actions/session_actions';


const msp = ({errors}) => {
    return {
        formType: "signup",
        errors: errors.session,
        link: <Link to="/login">Log in</Link>
    };
};

const mdp = dispatch => {
    return {
        processSession: user => dispatch(signup(user))
    };
};

export default connect(msp, mdp)(SessionForm);