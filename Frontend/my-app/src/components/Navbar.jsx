import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 
import { GiKite } from "react-icons/gi";

export default function Navbar(){
    return(
         <nav className="navbar">
          <div className="nav-brand">EmpowerHub<GiKite /></div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Browse Internships</Link>
            <Link to="/login"><b>Login</b></Link>
            <Link to="/register">Register</Link>
            {/* <Link to="/dashboard">Dashboard</Link>
            <Link to="/leaderboard">Leaderboard</Link>
            <Link to="/login">Login</Link>  */}
          </div>
        </nav>
    )
}