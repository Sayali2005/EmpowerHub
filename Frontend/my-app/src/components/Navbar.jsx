import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { GiKite } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="nav-brand">
        EmpowerHub <GiKite />
      </div>

      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/" onClick={() => setIsOpen(false)}>Browse Internships</Link>
        <Link to="/login" onClick={() => setIsOpen(false)}><b>Login</b></Link>
        <Link to="/register" onClick={() => setIsOpen(false)}>Register</Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}
