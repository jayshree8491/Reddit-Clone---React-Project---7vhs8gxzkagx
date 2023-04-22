import React, { useState } from 'react'
import postDataService from '../services/post.services'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom';


const AddPostPopup = (props) => {
    const navigate=useNavigate()
    const [post,setPost]=useState("")
    
    const handleSubmit=async (e)=>{
        e.preventDefault()

        if(post===""){
            toast("Please add a post")
            return;
        }
        const newPost={
            post,
            upvote:0,
            downvote:0,
            uservoted:[]
        }
        try{
            await postDataService.addPost(newPost)
            toast("Post added successfully")
        }catch(err){
            toast(err.message)
        }
        setPost("")
    }
    const close=()=>{
        props.setPostTrigger(false)
        navigate('/')
    }

    return (props.trigger) ? (
        <div className='addPostPopup'>
            <div className='addPostPopup-inner'>
                <div className='title'>
                    <h4>Add new post</h4>
                    {/* <button className='close-btn' onClick={close}>X</button> */}
                </div>
                <form onSubmit={handleSubmit}>
                    <p>Post Title</p>
                    <input onChange={(e)=>setPost(e.target.value)} className='inputText' type='text' name='post' value={post} />
                    <div className='btns'>
                        <button 
                        onClick={close}>Close</button>
                        <button type='Submit'>Save</button>
                    </div>
                </form>
                {props.children}
            </div>
            <ToastContainer />
        </div>
      ) : ""
}

export default AddPostPopup
