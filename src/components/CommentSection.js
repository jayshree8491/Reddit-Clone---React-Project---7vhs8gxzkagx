// CommentSection.js

import React from 'react';
import './CommentSection.css';

const CommentSection = ({ comments }) => {
  return (
    <div className="comment-section">
      <h2>Comments</h2>
      <ul className="comment-list">
        {comments.map((comment, index) => (
          <li key={index} className="comment-item">
            <p className="comment-content">{comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
