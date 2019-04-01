import React from 'react';
import PostItem from './post_item';
import {connect} from 'react-redux';
import {fetchPosts} from '../../actions/post_actions';
import {openModal} from '../../actions/modal_actions';
import PostIcons from './post_icons';
import {createLike, deleteLike} from '../../actions/like_actions';

class PostIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = { userId: this.props.userId};
    }

    componentDidMount () {
        this.props.fetchPosts(this.props.page, this.props.userId);
    }  

    componentDidUpdate(prevProps) {
        if (this.props.userId != prevProps.userId) {
            this.setState({ userId: this.props.userId });
            this.props.fetchPosts(this.props.page, this.props.userId);
        }
    }
    
    render () { 
    const posts = this.props.posts.map(post => {

        return <PostItem key={post.id} post={post} 
                 author={this.props.users[post.author_id]}
                 currentUser = {this.props.currentUserId}
                 openModal = {this.props.openModal}
                 page = {this.props.page}
                 createLike = {this.props.createLike}
                 deleteLike = {this.props.deleteLike}
                 likes = {this.props.likes.filter( like => like.post_id === post.id)}/> 
        });
        return (
            <ul className="post-index">
                <PostIcons currentUser = {this.props.currentUser} page = {this.props.page}/>
                {posts}
            </ul>
        );
    }

};

const msp = (state) => {
    return {
        posts: Object.values(state.entities.posts),
        users: state.entities.users,
        currentUserId: state.session.currentUser,
        currentUser: state.entities.users[state.session.currentUser],
        likes: Object.values(state.entities.likes)
    };
};

const mdp = dispatch => {
    return {
        fetchPosts: (page, userId) => dispatch(fetchPosts(page, userId)),
        requestUser: id => dispatch(requestUser(id)),
        openModal: (modal, post) => dispatch(openModal(modal, post)),
        createLike: like => dispatch(createLike(like)),
        deleteLike: likeId => dispatch(deleteLike(likeId))
    };
};

export default connect(msp, mdp)(PostIndex);



