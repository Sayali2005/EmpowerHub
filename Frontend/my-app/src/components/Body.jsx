import "./Body.css";
import { Link } from "react-router-dom";

export default function Body() {
  return (
    <div className="body-container">
      <div className="overlay">
        <div className="content-box">
          <h1>Welcome to <span className="brand-name">EmpowerHub</span></h1>
          <p>
            Join She Can Foundation's internship program and be part of a movement empowering underprivileged women through education, awareness, and support.
          </p>
          <p className="tagline">Contribute. Learn. Lead. 🌼</p>
          <Link to="/register">
            <button className="explore-btn">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
