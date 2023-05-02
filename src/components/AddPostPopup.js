import React, { useState } from 'react';
import postDataService from '../services/post.service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const AddPostPopup = ({ setPostTrigger }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title === '') {
      toast('Please add a title');
      return;
    }

    const newPost = {
      title,
      content,
      upvotes: 0,
      downvotes: 0,
      userVotes: [],
      createdAt: new Date(),
    };

    try {
      await postDataService.addPost(newPost);
      toast('Post added successfully');
    } catch (err) {
      toast(err.message);
    }

    setTitle('');
    setContent('');
    setPostTrigger(false);
    navigate('/');
  };

  const handleCancel = () => {
    setPostTrigger(false);
  };

  return (
    <div className='addPostPopup'>
      <div className='addPostPopup-inner'>
        <div className='title'>
          <h4>Add new post</h4>
          <button className='close-btn' onClick={handleCancel}>
            X
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              id='title'
              name='title'
              className='form-control'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='content'>Content</label>
            <textarea
              id='content'
              name='content'
              className='form-control'
              rows='5'
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <div className='btns'>
            <button className='btn btn-secondary' onClick={handleCancel}>
              Cancel
            </button>
            <button type='submit' className='btn btn-primary'>
              Add Post
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddPostPopup;
