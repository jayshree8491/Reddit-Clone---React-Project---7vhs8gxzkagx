import './App.css';
import Navbar from './components/Navbar';
import AddPostPopup from './components/AddPostPopup'
import { useState } from 'react'
import LoginPopup from './components/LoginPopup';
import Posts from './components/Posts';
import { Route, Routes } from 'react-router-dom';

function App() {
const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  const [addpostPopup,setAddPostPopup]=useState(false)
  const [loginPopup,setLoginPopup]=useState(false)
  return (
    <>
    <div className="App">
    <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
   
      <Navbar setPostTrigger={setAddPostPopup} setLoginTrigger={setLoginPopup}/>
      
    </div>
    <div className='routes'>
      <Routes>
        <Route path='/' element={<Posts/>}/>
        <Route path='/login' element={<LoginPopup trigger={loginPopup} setLoginTrigger={setLoginPopup}/>}/>
       <Route path='/addpost' element={<AddPostPopup trigger={addpostPopup} setPostTrigger={setAddPostPopup}/>}/>

        <Route path="/login" element={<LoginPopup handleLogin={handleLogin} />} />
        ...
      </Routes>
    
    </div>
    </>
  );
}

export default App;
