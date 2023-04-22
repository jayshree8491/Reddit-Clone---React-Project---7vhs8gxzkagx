import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../stylesheets/Popup.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LoginPopup = (props) => {
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem("userName", name)
    toast("Login successfull")
    navigate('/')
  }
  return (props.trigger) ? (
    <div className='popup'>
      <div className='popup-inner'>
        <form onSubmit={handleSubmit}>
          <h3>Login</h3>
          <input onChange={(e) => setName(e.target.value)} placeholder='Username' name='name' value={name} required />
          <input onChange={(e) => setPassword(e.target.value)} placeholder='Password' name='password' value={password} required />
          <div className='btns'>
            <button type='Submit'>Login</button>
            {/* <button>Back</button> */}
          </div>
        </form>
        <button onClick={() => props.setLoginTrigger(false)}>Back</button>
        {props.children}
      </div>
      <ToastContainer />
    </div>
  ) : ""
}

export default LoginPopup
