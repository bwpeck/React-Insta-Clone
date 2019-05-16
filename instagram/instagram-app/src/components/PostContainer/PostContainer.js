import React from 'react';
import Post from './Post';
import './PostsContainer.css';

const PostsContainer = props => {
    return (
        <div className="posts-container-Wrap">
        {props.posts.map(j => <Post key={j.imageURL} post={j} />)}
        </div>
    )
}

export default PostsContainer;