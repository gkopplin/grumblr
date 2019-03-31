import React from 'react';
import PostItem from './post_item';
import {connect} from 'react-redux';
import {fetchPosts} from '../../actions/post_actions';
import {openModal} from '../../actions/modal_actions';
import PostIcons from './post_icons';

class PostIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount () {
        //temp
        this.props.fetchPosts(this.props.page);
    }  
    
    render () {
    const posts = this.props.posts.map(post => {
        return <PostItem key={post.id} post={post} author={this.props.users[post.author_id]}
                 currentUser = {this.props.currentUser}
                 openModal = {this.props.openModal}/> 
    });
        return (
            <ul className="post-index">
                <PostIcons />
                {posts}
            </ul>
        );
    }

};

const msp = (state) => {
    return {
        posts: Object.values(state.entities.posts),
        users: state.entities.users,
        currentUser: state.session.currentUser
    };
};

const mdp = dispatch => {
    //temp
    return {
        fetchPosts: (page) => dispatch(fetchPosts(page)),
        requestUser: id => dispatch(requestUser(id)),
        openModal: (modal, post) => dispatch(openModal(modal, post))
    };
};

export default connect(msp, mdp)(PostIndex);



