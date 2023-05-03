import './App.css';
import Navbar from './components/Navbar';
import AddPostPopup from './components/AddPostPopup'
import { useState } from 'react'
import LoginPopup from './components/LoginPopup';
import Posts from './components/Posts';
import { Route, Routes } from 'react-router-dom';
function handleLogin() {
  // Your login logic goes here
  console.log('User logged in');
}
function App() {
  const [addpostPopup,setAddPostPopup]=useState(false)
  const [loginPopup,setLoginPopup]=useState(false)

  return (
    <>
    <div className="App">
      <Navbar setPostTrigger={setAddPostPopup} setLoginTrigger={setLoginPopup}/>
      
    </div>
    <div className='routes'>
      <Routes>
        <Route path='/' element={<Posts/>}/>
        <Route path='/login' element={<LoginPopup trigger={loginPopup} setLoginTrigger={setLoginPopup} handleLogin={handleLogin} />} />
          <Route path='/addpost' element={<AddPostPopup trigger={addpostPopup} setPostTrigger={setAddPostPopup}/>}/>
          ...
      </Routes>
    
    </div>
    </>
  );
}

export default App;
