import { combineReducers } from "redux";
import session from './session_reducer';

export default combineReducers({
    temp: session
});