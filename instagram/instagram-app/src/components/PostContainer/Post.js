import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSectionContainer';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

import './PostsContainer.css';

class Post extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        likes: props.post.likes
      };
    }
    addLike = () => {
      let likes = this.state.likes + 1;
      this.setState({ likes });
    };
    render() {
    return (
        <div className="post-border">
        <PostHeader username={this.props.post.username}
        thumbnailURL={this.props.post.thumbnailURL}/>
        <div className="post-image-wrap">
        <img alt="post thumbnail"
        className="post-image"
        src={this.props.post.imageURL}/>
        </div>
        <LikeSection addLike={this.addLike}
        likes={this.state.likes} />
        <CommentSection postId={this.props.post.imageUrl}
        comments={this.props.post.comments} />
        </div>
    )
}
}
Post.propTypes = {
    post: PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string
    })
  };

export default Post