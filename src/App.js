// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/login";
import Signup from "./components/Signup";
import { useState } from "react";

function App() {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [username, setusername] = useState("");
  const [searchquery, setsearchquery] = useState("");
  // const [mode, setMode] = useState("light");
  let mode = "light";
  if (!localStorage.getItem("storedMode")) {
    localStorage.setItem("storedMode", mode);
  }
  // localStorage.setItem("storedMode", mode);
  // document.body.style.backgroundColor = "#C9F5FD";
  // const storedMode = localStorage.getItem("mode");
  // if (mode === "light") {
  //   document.body.style.backgroundColor = "#C9F5FD";
  // }

  if (localStorage.getItem("storedMode") === "light") {
    document.body.style.backgroundColor = "#C9F5FD";
    document.body.style.color = "black"; // Set text color to white
  } else if (localStorage.getItem("storedMode") === "dark") {
    document.body.style.backgroundColor = "#000506";
    document.body.style.color = "white"; // Set text color to white
  }
  // console.log(localStorage.getItem("storedMode"));

  const toggleMode = () => {
    if (localStorage.getItem("storedMode") === "light") {
      // setMode("dark");
      // console.log("inside if 1");
      mode = "dark";
      localStorage.setItem("storedMode", mode);
      // console.log(localStorage.getItem("storedMode"));
      document.body.style.backgroundColor = "#000506";
      document.body.style.color = "white"; // Set text color to white
    } else if (localStorage.getItem("storedMode") === "dark") {
      // setMode("light");
      mode = "light";
      localStorage.setItem("storedMode", mode);
      // console.log(localStorage.getItem("storedMode"));
      document.body.style.backgroundColor = "#C9F5FD";
      document.body.style.color = "black"; // Set text color to white
    }
  };
  // const [userAuthToken, setuserAuthToken] = useState("");
  return (
    <>
      <NoteState>
        <Router>
          <Navbar
            setsearchquery={setsearchquery}
            isSignedUp={isSignedUp}
            // mode={mode}
            toggleMode={toggleMode}
          />
          <Alert message="Welcome to iNotebook" />
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    username={username}
                    searchquery={searchquery}
                    mode={mode}
                    isSignedUp={isSignedUp}
                  />
                }
              ></Route>
              <Route path="/about" element={<About />}></Route>
              <Route
                path="/login"
                element={
                  <Login
                    // mode={mode}
                    setusername={setusername}
                    setIsSignedUp={setIsSignedUp}
                  />
                }
              ></Route>
              <Route
                path="/signup"
                element={
                  <Signup
                    setusername={setusername}
                    setIsSignedUp={setIsSignedUp}
                  />
                }
              ></Route>
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
