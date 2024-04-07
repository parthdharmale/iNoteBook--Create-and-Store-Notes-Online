import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

import Notes from "./Notes";
// import AddNote from "./AddNote";
const Home = ({ username, searchquery, isSignedUp, userAuthToken, mode }) => {
  let token = localStorage.getItem("token");
  if (localStorage.getItem("storedMode") === "light") {
    // setMode("dark");
    // console.log("light");

    document.body.style.backgroundColor = "#C9F5FD";
    document.body.style.color = "black"; // Set text color to white
  } else if (localStorage.getItem("storedMode") === "dark") {
    // console.log("dark");
    document.body.style.backgroundColor = "#000506";
    document.body.style.color = "white"; // Set text color to white
  }
  if (token) {
    isSignedUp = true;
  }
  return (
    <div>
      {isSignedUp && (
        <Notes
          username={username}
          searchquery={searchquery}
          // mode={mode}
          userAuthToken={userAuthToken}
        />
      )}

      {!isSignedUp && <Navigate to="/signup" />}
    </div>
  );
};

export default Home;
