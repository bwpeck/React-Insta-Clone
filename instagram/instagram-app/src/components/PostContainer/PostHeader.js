import React from 'react';
import './PostsContainer.css';

const PostHeader = props => {
  return (
    <div className="post-head">
      <div className="post-thumb-wrap">
        <img alt="post head"
        className="post-thumb"
        src={props.thumbnailUrl}/>
      </div>
      <div>{props.username}</div>
    </div>
  );
};

export default PostHeader;