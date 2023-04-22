import React, { useState } from 'react'
import '../stylesheets/post.css'
import postDataService from '../services/post.services'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PostItem = ({postText,upvote,downvote,userVoted,postId}) => {
  const user=localStorage.getItem('userName')
  const [upVote,setUpVote]=useState(upvote)
  const [downVote,setDownVote]=useState(downvote)

  // console.log(postId)
  const isLoggedin=()=>{
    if(localStorage.getItem('userName')){
      return true
    }
    return false;
  }
  const addUpVote=async(e)=>{
    if(isLoggedin() && !userVoted.includes(user)){
      setUpVote(upVote+1);
      console.log(upVote+1)
      userVoted.push(user)
      const updatedPost={
        post:postText,
        upvote:upVote+1,
        downvote:downVote,
        uservoted:userVoted
      }
      try{
        await postDataService.updatePost(postId,updatedPost)
      }catch(err){
        toast(err.message)
      }
    }
    else if (!isLoggedin()){
      toast("Please login 🙏 to Upvote")
    }
  }
  const addDownVote=async(e)=>{
    if(isLoggedin() && !userVoted.includes(user)){
      setDownVote(downVote+1);
      userVoted.push(user)
      const updatedPost={
        post:postText,
        upvote:upVote,
        downvote:downVote+1,
        uservoted:userVoted
      }
      try{
        await postDataService.updatePost(postId,updatedPost)
      }catch(err){
        toast(err.message)
      }
    }
    else if (!isLoggedin()) {
      toast("Please login 🙏 to Downvote")
    }
  }

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

export default PostItem
