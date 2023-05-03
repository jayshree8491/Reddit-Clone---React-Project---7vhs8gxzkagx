import { Link } from 'react-router-dom';
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import "../stylesheets/logo.css"
import logo from "./logo.png"


function Navbar(props) {
  const navigate = useNavigate();

  const addPost = () => {
    navigate("/addpost");
  };

  const login = () => {
    navigate("/login");
  };

  const logout = () => {
    localStorage.removeItem("userName");
    toast("Logged out successfully");
    navigate("/login");
  };

  return (
    <>
      <div className="nav">
        <span id="reddit-logo">
          <img src={logo} alt="Logo" />
        </span>
        <span id="login">
          {props.isLoggedIn ? (
            <>
              <button onClick={addPost}>Add post</button>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <button onClick={login}>Login</button>
          )}
        </span>
      </div>
      <ToastContainer />
    </>
  );
}
export default Navbar;
