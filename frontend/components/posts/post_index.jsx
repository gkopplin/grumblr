import React from 'react';
import PostItem from './post_item';
import {connect} from 'react-redux';
import {fetchPosts} from '../../actions/post_actions';

class PostIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount () {
        //temp
        this.props.fetchPosts();
    }  
    
    render () {
        const posts = this.props.posts.map(post => <PostItem key={post.id} post={post} author={this.props.users[post.author_id]}/> );
        return (
            <ul className="post-index">
                {posts}
            </ul>
        );
    }

};

const msp = (state) => {
    return {
        posts: Object.values(state.entities.posts),
        users: state.entities.users
    };
};

const mdp = dispatch => {
    //temp
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        requestUser: id => dispatch(requestUser(id))
    };
};

export default connect(msp, mdp)(PostIndex);



