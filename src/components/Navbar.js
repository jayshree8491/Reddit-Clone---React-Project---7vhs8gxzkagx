import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import "../stylesheets/logo.css"
import logo from "./logo.png"


const Navbar = (props) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userName');
    props.handleLogout();
    navigate('/login');
  };
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
    navigate('/login')
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
         <nav>
      <Link to="/">Home</Link>
      {props.isLoggedIn ? (
        <>
          <button onClick={handleLogout}>Logout</button>
          <Link to="/addpost">Add Post</Link>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
    </div>
    <ToastContainer/>
    </>
  )
}

export default Navbar;
