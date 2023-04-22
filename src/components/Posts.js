import React, { useEffect, useState } from 'react'
import PostItem from './PostItem'
import postDataService from '../services/post.services'
import "../stylesheets/post.css"

const Posts = () => {
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        getPosts()
    },[])
    const getPosts=async ()=>{
        const data=await postDataService.getAllPosts()
        // console.log(data.docs)
        setPosts(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
        // console.log(posts[0].id)
    }
  return (
    <div className="post-container">
      {/* <pre>{JSON.stringify(posts,undefined,1)}</pre> */}
      {posts.map((post,index)=>{
        return(
            <PostItem 
                key={post.id}
                postText={post.post}
                upvote={post.upvote}
                downvote={post.downvote}
                userVoted={post.uservoted}
                postId={post.id}
            />
        )
      })}
    </div>
  )
}

export default Posts
