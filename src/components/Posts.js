import React, { useEffect, useState } from 'react';
import PostItem from './PostItem';
import postDataService from '../services/post.services';
import '../stylesheets/post.css';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const data = await postDataService.getAllPosts();
      setPosts(prevPosts => {
        return data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      });
      setLoading(false); // Set loading state to false when data is fetched
    } catch (error) {
      console.error('Error fetching posts:', error);
      setLoading(false); // Set loading state to false even if an error occurs
    }
  };

  return (
    <div className="post-container">
      {loading ? (
        <div>Loading...</div> // Display a loading message or spinner while data is being fetched
      ) : (
        posts.map(post => (
          <PostItem
            key={post.id}
            postText={post.post}
            upvote={post.upvote}
            downvote={post.downvote}
            userVoted={post.uservoted}
            postId={post.id}
          />
        ))
      )}
    </div>
  );
};

export default Posts;