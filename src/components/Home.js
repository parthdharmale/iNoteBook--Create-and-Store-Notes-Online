import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

import Notes from "./Notes";
// import AddNote from "./AddNote";
const Home = ({ isSignedUp, userAuthToken, mode }) => {
  return (
    <div>
      {!isSignedUp && <Navigate to="/signup" />}

      {isSignedUp && <Notes mode = {mode} userAuthToken={userAuthToken} />}
    </div>
  );
};

export default Home;
