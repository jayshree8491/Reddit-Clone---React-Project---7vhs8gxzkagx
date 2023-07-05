import './App.css';
import Navbar from './components/Navbar';
import AddPostPopup from './components/AddPostPopup';
import { useState } from 'react';
import LoginPopup from './components/LoginPopup';
import Posts from './components/Posts';
import SignUpModal from './components/SignupModal';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { auth } from "./firebase-config";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

function handleLogin(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Login successful
      const user = userCredential.user;
      console.log("User logged in:", user);
      // Add your logic here after successful login
    })
    .catch((error) => {
      // Handle login error
      console.log("Login error:", error);
      // Add your error handling logic here
    });
}


function App() {
  const [addPostPopup, setAddPostPopup] = useState(false);
  const [loginPopup, setLoginPopup] = useState(false);
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth)
    .then(() => {
      localStorage.removeItem('userName');
      navigate("/");
    })
    .catch((error) => {
      console.log("Logout error:", error);
      // Add your error handling logic here
    });
  };

  return (
    <>
      <div className="App">
        <Navbar setPostTrigger={setAddPostPopup} setLoginTrigger={setLoginPopup} />
      </div>
      <div className="routes">
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route
            path="/login"
            element={
              <LoginPopup
                trigger={loginPopup}
                setLoginTrigger={setLoginPopup}
                handleLogin={handleLogin}
                
              />
            }
          />
          <Route path="/signup" element={<SignUpModal />} />
          <Route
            path="/addpost"
            element={
              <AddPostPopup
                trigger={addPostPopup}
                setPostTrigger={setAddPostPopup}
              />
            }
          />
          {/* Add more routes for other pages or features */}
        </Routes>
      </div>
    </>
  );
}

export default App;
