import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = (props) => {
  const [activePage, setActivePage] = useState("");
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
    props.setsearchquery(value); // Pass the search query to the parent component
  };
  const location = useLocation();
  let navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  useEffect(() => {
    // Extract the pathname from the location object
    const pathname = location.pathname;
    // Set the active page based on the pathname
    setActivePage(pathname);
  }, [location]);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            iNoteBook
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li> */}
            </ul>
            {localStorage.getItem("token") && (
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <form className="form-inline my-2 my-lg-0">
                    <input
                      className="form-control mr-sm-2 custom-search-input"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      value={searchValue}
                      onChange={handleSearchChange}
                    />
                  </form>
                </div>
              </div>
            )}
            {!localStorage.getItem("token") ? (
              <form className="d-flex mx-2">
                <Link
                  className="btn btn-outline-success mx-2 custom-login"
                  to="/login"
                  role="button"
                >
                  Log In
                </Link>
                <Link
                  className="btn btn-outline-success mxx2 custom-signup"
                  to="/signup"
                  role="button"
                >
                  Sign Up
                </Link>
              </form>
            ) : (
              <button
                className="btn btn-primary mx-2 custom-logout"
                onClick={handleLogOut}
              >
                {" "}
                Log Out{" "}
              </button>
            )}
          </div>
          {/* <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          > */}
          <div className="form-check form-switch text-light">
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable DarkMode
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

{
  /* <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                  >
                    Search
                  </button> */
}
