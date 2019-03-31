import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import Modal from 'react-modal';

 
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

    const profilePics = document.getElementsByClassName("profile-container");
    window.onscroll = () => stickyPics(profilePics);

    const root = document.getElementById('root');
    Modal.setAppElement(root);
    ReactDOM.render(<Root store={store} />, root);
});

const stickyPics = profilePics => {
    for (let i = 0; i < profilePics.length; i++){
        if (window.scrollY >= profilePics[i].offsetTop) {
            profilePics[i].classList.remove("sticky-bottom");
            profilePics[i].firstElementChild.classList.add("sticky");

            if (i < profilePics.length - 1 &&
                window.scrollY > profilePics[i + 1].offsetTop -90) {
                profilePics[i].firstElementChild.classList.remove("sticky");
                profilePics[i].classList.add("sticky-bottom");
            }
        } else {
            profilePics[i].firstElementChild.classList.remove("sticky");
            profilePics[i].classList.remove("sticky-bottom");
        }
    }
        
};