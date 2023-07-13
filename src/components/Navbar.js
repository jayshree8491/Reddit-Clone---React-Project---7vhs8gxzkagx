import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../firebase-config';
import { signOut } from 'firebase/auth';
import "../stylesheets/logo.css";
import { NavSidebar } from './NavSidebar';
import logo from './logo.png';
import React, { useState } from 'react';
import Header from './Header';


const Navbar = (props) => {
  const navigate = useNavigate();

  const isLoggedIn = () => {
    if (localStorage.getItem('userName')) {
      return true;
    }
    return false;
  };

  const addPost = () => {
    props.setPostTrigger(true);
    navigate('/addpost');
  };

  const login = () => {
    props.setLoginTrigger(true);
    navigate('/login');
  };

  const signup = () => {
    props.setLoginTrigger(true);
    navigate('/signup');
  };

  const logout = () => {
    auth
      .signOut()
      .then(() => {
        localStorage.removeItem('userName');
        navigate('/');
      })
      .catch((error) => {
        console.log('Logout error:', error);
      });
  };

  return (
    <>
      <div className="nav">
        <span id="reddit-logo">
          <img src={logo} alt="Logo" />
        </span>
        <Header/>
        <span id="login">
          {isLoggedIn() && <button onClick={addPost}>Add post</button>}
          {!isLoggedIn() && <button onClick={login}>Login</button>}
          {isLoggedIn() && <button onClick={logout}>Logout</button>}
          <button onClick={signup}>Sign Up</button>
        </span>
      </div>
      <ToastContainer />
    </>
  );
};

export default Navbar;
