import React, { useContext, useEffect, useRef, useState } from "react";
import "./Navbar.css";
import Home from "../../Pages/Home";
import { Link } from "react-router-dom";
import About from "../../Pages/About";
import Rooms from "../../Pages/Rooms";
import MyBooking from "../../Pages/MyBooking";
import Login from "../../Pages/Login";
import Register from "../../Pages/Register";
import { FaUser } from "react-icons/fa";
import { FaCog } from "react-icons/fa";

import { AuthContext } from "../../Context/AuthContext";
const Navbar = () => {
  const {
    isLoggedIn,
    setIsLoggedIn,
    username,
    setUsername,
    userPhoto,
    setUserPhoto,
  } = useContext(AuthContext);
  const [dropdown, setDropdwon] = useState(false);
  const dropwoenRef = useRef(null);
  const toggleDropdown = () => {
    setDropdwon(!dropdown);
  };
  const handleLoggedOut = () => {
    setIsLoggedIn(false);
    setUsername(" ");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };
  useEffect(() => {
    const handleDropdownRef = (e) => {
      if (dropwoenRef.current && !dropwoenRef.current.contains(e.target)) {
        setDropdwon(false);
      }
    };
    document.addEventListener("mousedown", handleDropdownRef);
    return () => {
      document.removeEventListener("mousedown", handleDropdownRef);
    };
  }, []);
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <h1>
          <span>B</span>ookSpace
        </h1>
      </div>
      <div className="navbar-list">
        <ul>
          <Link to="/" className="link">
            <li>Home</li>
          </Link>
          <Link to="/about" className="link">
            <li>About</li>
          </Link>
          <Link to="/rooms" className="link">
            <li>Rooms</li>
          </Link>
          <Link to="/mybooking" className="link">
            <li>MyBooking</li>
          </Link>
        </ul>
      </div>
      <div className="navbar-loginsignup">
        {!isLoggedIn ? (
          <>
            <Link to="/login">
              <button>Login</button>
            </Link>
            <Link to="/register">
              <button>Signup</button>
            </Link>
          </>
        ) : (
          <div
            className="profile-wrapper"
            style={{ position: "relative" }}
            ref={dropwoenRef}
          >
            <div className="profile-icon" onClick={toggleDropdown}>
              {userPhoto ? (
                <img src={userPhoto} alt="User Avatar" className="avatar" />
              ) : (
                username.charAt(0).toUpperCase()
              )}
            </div>
            {dropdown && (
              <div className="dropdown">
                <p className="username">{username}</p>
                <div className="your-profile">
                  <div className="your-profile-top">
                    <Link to={'./profile'} style={{textDecoration:'none' ,color:'#000'}}>
                    <div className="content" >
                      <FaUser />
                      your Profile
                    </div>
                    </Link>
                    <Link to={'/settings'} style={{textDecoration:'none' ,color:'#000'}}>
                    <div className="content">
                      <FaCog />
                      Settings
                    </div>
                    </Link>
                  </div>
                  <hr />
                  <Link 
                  to={'/'}
                  style={{textDecoration:'none',color:'#000'}}
                  >
                   <div className="your-profile-down" onClick={handleLoggedOut}>log out</div>
                  </Link>
                 
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
