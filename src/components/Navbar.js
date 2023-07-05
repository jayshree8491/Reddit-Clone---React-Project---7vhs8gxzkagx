import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import "../stylesheets/logo.css";
import logo from "./logo.png";
import SignUpModal from './SignupModal';
import { auth } from "../firebase-config";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

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

  const logout = () => {
    auth.signOut()
      .then(() => {
        localStorage.removeItem('userName');
        navigate("/");
      })
      .catch((error) => {
        console.log("Logout error:", error);
      });
  };

  return (
    <>
      <div className='nav'>
        <span id='reddit-logo' > <img src={logo} alt="Logo" /></span>
        <span id='login'>
          {isLoggedIn() && <button onClick={addPost}>Add post</button>}
          {!isLoggedIn() && <button onClick={login}>Login</button>}
          {isLoggedIn() && <button onClick={logout}>Logout</button>}
          <Link to="/signup">Sign Up</Link>
        </span>
      </div>
      <ToastContainer />
    </>
  );
};

export default Navbar;
