import React, { useState } from 'react';
import './Login.css';
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      return alert("Passwords do not match!");
    }

    try {
      const res = await axios.post("https://empowerhub.onrender.com/api/users", {
        name,
        username,
        password
      });

      localStorage.setItem("user", JSON.stringify(res.data));
      alert("Registration successful!");
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Registration failed!");
    }
  };

  return (
    <div className="home-body">
      <div className="login-container">
        <h2>Register</h2>
        <form className="form" onSubmit={handleRegister}>
          <div className="group">
            <label htmlFor="name">Name</label><br />
            <input 
              type="text" 
              id="name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
            />
          </div>
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
          <div className="group">
            <label htmlFor="confirmpassword">Confirm Password</label><br />
            <input 
              type="password" 
              id="confirmpassword" 
              value={confirmpassword}
              onChange={(e) => setConfirmpassword(e.target.value)}
              required 
            />
          </div>
          <br />
          <button type="submit" className="btn">Register to Continue</button>
        </form>
        <p className="register-link">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
