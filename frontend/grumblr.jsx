import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {createPost, deletePost, updatePost} from './actions/post_actions';

 
document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { currentUser: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.createPost = createPost;
    window.deletePost = deletePost;
    window.updatePost = updatePost;

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});