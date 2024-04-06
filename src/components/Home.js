import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

import Notes from "./Notes";
// import AddNote from "./AddNote";
const Home = ({ isSignedUp, userAuthToken, mode }) => {
  let token = localStorage.getItem("token");
  if (token) {
    isSignedUp = true;
  }
  return (
    <div>
      {isSignedUp && <Notes mode={mode} userAuthToken={userAuthToken} />}

      {!isSignedUp && <Navigate to="/signup" />}
    </div>
  );
};

export default Home;
