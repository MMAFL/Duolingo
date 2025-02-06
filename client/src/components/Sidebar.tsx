import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        backgroundColor: "#343a40",
        color: "#ffffff",
        padding: "20px",
      }}
    >
      <h2 style={{ color: "#4CAF50" }}>LinguaLearn</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ margin: "15px 0" }}>
          <Link
            to="/dashboard"
            style={{ color: "#ffffff", textDecoration: "none" }}
          >
            Dashboard
          </Link>
        </li>
        <li style={{ margin: "15px 0" }}>
          <Link
            to="/profile"
            style={{ color: "#ffffff", textDecoration: "none" }}
          >
            Profile
          </Link>
        </li>
        <li style={{ margin: "15px 0" }}>
          <Link
            to="/lessons"
            style={{ color: "#ffffff", textDecoration: "none" }}
          >
            Lessons
          </Link>
        </li>
        <li style={{ margin: "15px 0" }}>
          <Link
            to="/daily-rewards"
            style={{ color: "#ffffff", textDecoration: "none" }}
          >
            Daily Rewards
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
