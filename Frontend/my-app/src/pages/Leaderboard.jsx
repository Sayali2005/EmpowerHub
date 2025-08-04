import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Leaderboard.css"; // Import the CSS file

const Leaderboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/api/leaderboard")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching leaderboard:", error));
  }, []);

  return (
    <div className="leaderboard-container">
      <h2 className="leaderboard-title">🏆 Leaderboard</h2>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Referral Code</th>
            <th>Donations Raised</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.referralCode}</td>
              <td>₹{user.donationsRaised}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
