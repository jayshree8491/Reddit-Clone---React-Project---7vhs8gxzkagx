import React, { useState } from 'react'
import '../stylesheets/post.css'
import postDataService from '../services/post.services'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PostItem = (props) => {
  const { id, title, body, upVotes, downVotes } = props.post;
  const { handleUpVote, handleDownVote } = props;

  let [prevUpVote, setPrevUpVote] = useState(upVotes);
  let [prevDownVote, setPrevDownVote] = useState(downVotes);
  const [upVote, setUpVote] = useState(upvote);
  const [downVote, setDownVote] = useState(downvote);
  const [userVoted, setUserVoted] = useState([]);



  // console.log(postId)
  
  
  
  
  const isLoggedin=()=>{
    if(localStorage.getItem('userName')){
      return true;
    }
    return false;
  }
  const addUpVote = async (e) => {
  if (isLoggedin() && !userVoted.includes(user)) {
    setUpVote((prevUpVote) => prevUpVote + 1);
    setUserVoted((prevUserVoted) => [...prevUserVoted, user]);
    const updatedPost = {
      post: postText,
      upvote: prevUpVote + 1, // use the previous state value
      downvote: downVote,
      uservoted: [...userVoted, user],
    };
    try {
      await postDataService.updatePost(postId, updatedPost);
    } catch (err) {
      toast(err.message);
    }
  } else if (!isLoggedin()) {
    toast("Please login 🙏 to Upvote");
  }
};

const addDownVote = async (e) => {
  if (isLoggedin() && !userVoted.includes(user)) {
    setDownVote((prevDownVote) => prevDownVote + 1);
    setUserVoted((prevUserVoted) => [...prevUserVoted, user]);
    const updatedPost = {
      post: postText,
      upvote: upVote,
      downvote: prevDownVote + 1, // use the previous state value
      uservoted: [...userVoted, user],
    };
    try {
      await postDataService.updatePost(postId, updatedPost);
    } catch (err) {
      toast(err.message);
    }
  } else if (!isLoggedin()) {
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
    <ToastContainer/>
    </>
  )
}

export default PostItem;
