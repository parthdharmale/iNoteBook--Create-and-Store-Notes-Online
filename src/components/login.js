import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setusername, setIsSignedUp, mode }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  // const [password, setPassword] = useState("")

  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // fetch("http://localhost:5000/api/auth/login")

    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();

    console.log(json);
    // if (credentials && credentials.email) {
    //   let name = json.name.split(" ")[0];
    //   name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    //   // console.log(name);
    //   // setusername(name);
    // }
    if (json.success) {
      // Save the authtoken and redirect
      localStorage.setItem("token", json.authtoken);
      localStorage.setItem("username", json.name);
      localStorage.setItem("userEmail", credentials.email);

      setIsSignedUp(true);
      navigate("/");
    } else {
      alert("Invalid Credentials");
    }
  };

  const onChange = (e) => {
    console.log("Onchange");
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div
          // className={`mb-3 my-3 text-${localStorage.getItem("storedMode") === "light" ? "dark" : "light"}`}
          className="mb-3 my-3"
        >
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={credentials.email}
            id="email"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
        </div>
        <div
          // className={`mb-3 my-3 text-${localStorage.getItem("storedMode") === "light" ? "dark" : "light"}`}
          className="mb-3 my-3"
        >
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={credentials.password}
            id="password"
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary text-light">
          Submit
        </button>
        <Link
          className="btn btn-outline-success mx-2"
          to="/signup"
          role="button"
        >
          New? Sign Up instead
        </Link>
      </form>
    </div>
  );
};

export default Login;
