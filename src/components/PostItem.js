import React, { useState } from 'react'
import '../stylesheets/post.css'
import postDataService from '../services/post.services'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PostItem = (props) => {
  const { id, postText, upVotes, downVotes } = props.post;
  const { handleUpVote, handleDownVote } = props;

  const [prevUpVote, setPrevUpVote] = useState(upVotes);
  const [prevDownVote, setPrevDownVote] = useState(downVotes);
  const [upVote, setUpVote] = useState(upVotes);
  const [downVote, setDownVote] = useState(downVotes);
  const [userVoted, setUserVoted] = useState([]);
  const user = localStorage.getItem('userName');

  const addUpVote = async (e) => {
    if (user && !userVoted.includes(user)) {
      setUpVote((prevUpVote) => prevUpVote + 1);
      setUserVoted((prevUserVoted) => [...prevUserVoted, user]);
      const updatedPost = {
        post: postText,
        upvote: prevUpVote + 1,
        downvote: downVote,
        uservoted: [...userVoted, user],
      };
      try {
        await postDataService.updatePost(id, updatedPost);
      } catch (err) {
        toast(err.message);
      }
    } else if (!user) {
      toast("Please login 🙏 to Upvote");
    }
  };

  const addDownVote = async (e) => {
    if (user && !userVoted.includes(user)) {
      setDownVote((prevDownVote) => prevDownVote + 1);
      setUserVoted((prevUserVoted) => [...prevUserVoted, user]);
      const updatedPost = {
        post: postText,
        upvote: upVote,
        downvote: prevDownVote + 1,
        uservoted: [...userVoted, user],
      };
      try {
        await postDataService.updatePost(id, updatedPost);
      } catch (err) {
        toast(err.message);
      }
    } else if (!user) {
      toast("Please login 🙏 to Downvote");
    }
  };

  return (
    <>
      <div className='postItem-container'>
        <div className='vote'>
          <button onClick={addUpVote} className='upvoteBtn'>↑</button>
          <button onClick={addDownVote} className='downvoteBtn'>↓</button>
          <div className='voteCount'>{upVote}</div>
          <div className='voteCount'>{downVote}</div>
        </div>
        <div className='postInfo'>
          <div>{postText}</div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export
