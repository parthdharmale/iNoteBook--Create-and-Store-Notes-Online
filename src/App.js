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
  const [mode, setMode] = useState("light");
  // document.body.style.backgroundColor = "#C9F5FD";
  if (mode === "light") {
    document.body.style.backgroundColor = "#C9F5FD";
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#000506";
      document.body.style.color = "white"; // Set text color to white
    } else if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "#C9F5FD";
      document.body.style.color = "black"; // Set text color to white
    }
  };
  // const [userAuthToken, setuserAuthToken] = useState("");
  return (
    <>
      <NoteState>
        <Router>
          <Navbar mode={mode} toggleMode={toggleMode} />
          <Alert message="Welcome to iNotebook" />
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={<Home mode={mode} isSignedUp={isSignedUp} />}
              ></Route>
              <Route path="/about" element={<About />}></Route>
              <Route
                path="/login"
                element={<Login mode={mode} setIsSignedUp={setIsSignedUp} />}
              ></Route>
              <Route
                path="/signup"
                element={<Signup setIsSignedUp={setIsSignedUp} />}
              ></Route>
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
