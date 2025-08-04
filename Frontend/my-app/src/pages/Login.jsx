import React, { useState } from 'react';
import './Login.css';
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://empowerhub.onrender.com/api/login", {
        username,
        password
      });

      // Save user to localStorage
      localStorage.setItem("user", JSON.stringify(res.data));
      alert("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Invalid credentials");
    }
  };

  return (
    <div className="home-body">
      <div className="login-container">
        <h2>Login</h2>
        <form className="form" onSubmit={handleLogin}>
          <div className="group">
            <label htmlFor="username">Username</label><br />
            <input 
              type="text" 
              id="username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required 
            />
          </div>
          <div className="group">
            <label htmlFor="password">Password</label><br />
            <input 
              type="password" 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          <br />
          <button type="submit" className="btn">Login to Continue</button>
        </form>
        <p className="register-link">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
