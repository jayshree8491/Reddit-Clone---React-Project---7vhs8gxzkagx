import React, { useEffect, useState } from 'react';
import PostItem from './PostItem';
import postDataService from '../services/post.services';
import '../stylesheets/post.css';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const data = await postDataService.getAllPosts();
      const transformedPosts = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPosts(transformedPosts);
    } catch (error) {
      console.log('Error fetching posts:', error);
    }
  };

  return (
    <div className="post-container">
      {posts.map((post) => (
        <PostItem
          key={post.id}
          postText={post.post}
          upvote={post.upvote}
          downvote={post.downvote}
          userVoted={post.uservoted}
          postId={post.id}
        />
      ))}
    </div>
  );
};

export default Posts;
