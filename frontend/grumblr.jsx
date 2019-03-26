import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { signup, receiveCurrentUser} from './actions/session_actions';
import * as ApiUtil from './util/api_session_util';
 
document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        // const preloadedState = {
        //     session: { id: window.currentUser.id },
        //     entities: {
        //         users: { [window.currentUser.id]: window.currentUser }
        //     }
        // };
        const preloadedState = {};
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.ApiUtil = ApiUtil;
    window.receiveCurrentUser = receiveCurrentUser;
    window.signup = signup;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});