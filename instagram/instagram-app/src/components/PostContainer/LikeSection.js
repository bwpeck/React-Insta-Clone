import React from 'react';

const LikeSection = props => {
  return [
    <div
      className="like-section"
      key="likes-icon-container"
      onClick={props.addLike}
    >
      <div className="like-section-wrap">
        <i className="heart" />
      </div>
      <div className="like-section-wrap">
        <i className="comment" />
      </div>
    </div>,
    <div className="like-section" key="likes-container">
      <div className="like-section-wrap">{props.likes}</div>
    </div>
  ];
};

export default LikeSection;