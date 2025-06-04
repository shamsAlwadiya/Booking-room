import React, { useState } from "react";
import "./Css/Register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      setSuccess("");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setSuccess("");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      setSuccess("");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      setSuccess("");
      return;
    }

    setError(""); 

    try {
      const response = await axios.post("https://mybooking-app.com/api/register", {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      });

      if (response.status === 200 || response.status === 201) {
        setSuccess("Registration successful!");

        setTimeout(() => {
          navigate("/");
        }, 1500);
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("An error occurred. Please try again.");
      }
      setSuccess("");
    }
  };

  const handleInputChange = () => {
    if (error) setError("");
    if (success) setSuccess("");
  };

  return (
    <div className="signup">
      <div className="signup-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSignup}>
          <div className="full-name">
            <label>
              First Name
              <input
                type="text"
                placeholder="first name"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                  handleInputChange();
                }}
                required
              />
            </label>
            <label>
              Last Name
              <input
                type="text"
                placeholder="last name"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                  handleInputChange();
                }}
                required
              />
            </label>
          </div>
          <label>
            Email
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
                handleInputChange();
              }}
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
                handleInputChange();
              }}
              required
            />
          </label>
          <label>
            Confirm Password
            <input
              type="password"
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                handleInputChange();
              }}
              required
            />
          </label>
          <div className="accept-terms">
            <label>
              <p>
                <input type="checkbox" required />I accept{" "}
                <Link style={{ textDecoration: "none" }} to="/terms">
                  terms and conditions
                </Link>
              </p>
            </label>
          </div>
          <button type="submit">Register Now</button>
          {error && (
            <p className="error" style={{ color: "red", marginTop: "10px" }}>
              {error}
            </p>
          )}
          {success && (
            <p className="success" style={{ color: "green", marginTop: "10px" }}>
              {success}
            </p>
          )}
        </form>
        <div className="already-have-account">
          Already have an account?{" "}
          <Link style={{ textDecoration: "none" }} to="/login">
            <span>login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;