import "./App.css";
import Navbar from "./components/Navbar";
import Article from "./components/Article";
import NavSidebar from "./components/NavSidebar";
import AddPostPopup from "./components/AddPostPopup";
import { useState, useEffect } from "react";
import LoginPopup from "./components/LoginPopup";
import Posts from "./components/Posts";
import SignUpModal from "./components/SignupModal";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
  const [newsFeed, setNewsFeed] = useState([]);
  const [subreddit, setSubreddit] = useState("gaming");
  useEffect(() => {
    fetch("https://www.reddit.com/r/" + subreddit + ".json").then((res) => {
      if (res.status !== 200) {
        console.warn("Warning: Something is wrong with the API.");
        return;
      }
      res.json().then((data) => {
        if (data != null) {
          const newsFeedData = data.data.children.map((child) => child.data);
          setNewsFeed(newsFeedData);
        }
      });
    });
  }, [subreddit]);

  const [addPostPopup, setAddPostPopup] = useState(false);
  const [loginPopup, setLoginPopup] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("userName");
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
        <Navbar
          setPostTrigger={setAddPostPopup}
          setLoginTrigger={setLoginPopup}
        />
      </div>

      <div className="container">
        <NavSidebar
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
        <div className="content">
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
        </div>

        <div className="news-feed">
          <div className="news-feed-header">
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-reddit-3771191-3147752.png"
              alt="Reddit-logo"
              className="reddit-icon"
            />
            <h2 className="news-feed-heading">Reddit News</h2>
          </div>
          {newsFeed != null &&
            newsFeed.map((newsItem, index) => (
              <div key={index} className="news-item">
                <h3 className="news-title">{newsItem.title}</h3>
                <p className="news-description">{newsItem.selftext}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
