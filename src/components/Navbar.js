import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import "../stylesheets/logo.css"
import logo from "./logo.png"


const Navbar = (props) => {
  const navigate=useNavigate()
  const isLoggedIn=()=>{
    if(localStorage.getItem('userName')){
      return true;
    }
    return false;
  }
  const addPost=()=>{
    props.setPostTrigger(true)
    navigate('/addpost')
  }
  const login=()=>{
    props.setLoginTrigger(true)
    navigate('/login')
  }
  const logout=()=>{
    localStorage.removeItem('userName')
    toast('Logged out successfully')
    navigate('/')
  }
  return (
    <>
    <div className='nav'>
        <span id='reddit-logo' > <img src={logo} alt="Logo" /></span>
        <span id='login'>
          {isLoggedIn() && <button onClick={addPost}>Add post</button>}
          {!isLoggedIn() && <button onClick={login}>Login</button>}
          {isLoggedIn() && <button onClick={logout}>Logout</button>}
        </span>
    </div>
    <ToastContainer/>
    </>
  )
}

export default Navbar
