// components/UserNavbar.jsx
import { Link, useNavigate } from "react-router-dom";
import "./UserNavbar.css";
import { GiKite } from "react-icons/gi";
import { FiMenu, FiX } from "react-icons/fi"; // ✅ Add this
import { useState } from "react";  

export default function UserNavbar() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
const [menuOpen, setMenuOpen] = useState(false); // ✅ Add this

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user) return null;

  return (
    <nav className="user-navbar">
      <div className="nav-brand">EmpowerHub <GiKite /></div>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/leaderboard">Leaderboard</Link>
        <span className="user-name">👤 {user?.name}</span>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>
    </nav>
  );
}
