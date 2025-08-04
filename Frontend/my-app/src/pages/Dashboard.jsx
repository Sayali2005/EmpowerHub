import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="dashboard-container">
      <h2>Welcome, {user?.name} 👋</h2>

      <p className="intro-text">
        <strong>She Can Foundation</strong> is an NGO, registered under the Indian Society Registration Act of 1860, dedicated to uplifting and empowering underprivileged women.
        Our mission is to provide education, training, and resources to help women from marginalized communities overcome obstacles and achieve their full potential.
        <br /><br />
        We promote gender equality, increase access to healthcare and education, and provide opportunities for economic growth and development.
        Join us in our mission to empower women and build a brighter future for all. 🌍💪
      </p>

      <div className="info-boxes">
        <div className="info-card">
          <h3>Referral Code</h3>
          <p className="code">{user?.referralCode || user?.username + "2025"}</p>
        </div>

        <div className="info-card">
          <h3>Donations Raised</h3>
          <p className="amount">₹{user?.donationsRaised || 0}</p>
        </div>
      </div>

      <div className="rewards-section">
        <h3>🎁 Rewards & Unlockables</h3>
        <ul>
          <li>🎽 ₹500+ – Free She Can Foundation T-shirt</li>
          <li>📣 ₹1000+ – Instagram & LinkedIn shoutout</li>
          <li>🏅 ₹2000+ – Certificate of Impact</li>
          <li>🌟 Top 10 – Spotlight on our social platforms</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
