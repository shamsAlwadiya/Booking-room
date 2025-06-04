import React, { useContext, useState } from "react";
import "./Css/Login.css";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import { GithubAuthProvider  } from "firebase/auth";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
const Login = () => {
  const {setIsLoggedIn ,setUsername} =useContext(AuthContext);
  const navigate = useNavigate();
  navigate('/');
  const githubProvider = new GithubAuthProvider();

const handleGithubLogin = async () => {
                        try {
                          const result = await signInWithPopup(auth, provider);
                          const user = result.user;
                          console.log("github User:", user);
                          setShowGithub(false);
                          setSuccess(true);
                          setError(false);
                          setIsLoggedIn(true)
                          setUsername(user.displayName || user.email);
                          localStorage.setItem('user',JSON.stringify(user))
                          navigate('/')

                        } catch (error) {
                          console.error("github Login Error:", error);
                          setError(true);
                          setSuccess(false);
                        }
                      }

const handleGoogleLogin = async () => {
                        try {
                          const result = await signInWithPopup(auth, provider);
                          const user = result.user;
                          console.log("Google User:", user);
                          setShowGoogle(false);
                          setSuccess(true);
                          setError(false);
                          setIsLoggedIn(true)
                          setUsername(user.displayName || user.email);
                          localStorage.setItem('user',JSON.stringify(user))
                          navigate('/')

                        } catch (error) {
                          console.error("Google Login Error:", error);
                          setError(true);
                          setSuccess(false);
                        }
                      }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [showGoogle, setShowGoogle] = useState(false);
  const [showGithub, setShowGithub] = useState(false);
  const [googleEmail, setGoogleEmail] = useState("");

  const handleLogin = async(e) => {
    e.preventDefault();
    await axios.post("", { email, password })
    .then(res=>{
      console.log(res.data)
     const user = res.data.user;
     const token = res.data.token
     localStorage.setItem('user',JSON.stringify(user));
     localStorage.setItem('token',token)
    })
    .catch(err=>{
      console.log(err);
    })
   
  };

  return (
    <div className="login">
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="social">
            <button
              className="google"
              onClick={handleGoogleLogin}
            >
              <FcGoogle style={{ fontSize: "25px" }} />
              Continue with Google
            </button>
            <button
              className="github"
               onClick={handleGithubLogin}
            >
              <FaGithub style={{ fontSize: "25px" }} />
              Continue with github
            </button>
          </div>
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          <div className="login-below">
            <div className="remember-me">
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <div className="forgot-password">
              <Link style={{ color: "#000" }} to="/forgetPassword">
                Forgot your password?{" "}
              </Link>
            </div>
          </div>
        </form>
        {success && <p className="success">Login successful!</p>}
        {error && <p className="error">Login failed. Please try again.</p>}
        <p>
          Don't have an account?{" "}
          <Link style={{ textDecoration: "none" }} to="/register">
            <span>register</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
