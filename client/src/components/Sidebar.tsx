import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar" style={{
      width: '250px',
      position: 'fixed',
      height: '100vh',
      left: 0,
      top: 0,
      backgroundColor: '#343a40',
      color: '#ffffff',
      padding: '20px',
      boxSizing: 'border-box',
      zIndex: 1000
    }}>
      <h2 style={{ color: '#4CAF50' }}>LinguaLearn</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ margin: '15px 0' }}>
          <Link to="/dashboard" style={{ color: '#ffffff', textDecoration: 'none' }}>
            Dashboard
          </Link>
        </li>
        <li style={{ margin: '15px 0' }}>
          <Link to="/profile" style={{ color: '#ffffff', textDecoration: 'none' }}>
            Profile
          </Link>
        </li>
        <li style={{ margin: '15px 0' }}>
          <Link to="/lessons" style={{ color: '#ffffff', textDecoration: 'none' }}>
            Lessons
          </Link>
        </li>
        <li style={{ margin: '15px 0' }}>
          <Link to="/daily-rewards" style={{ color: '#ffffff', textDecoration: 'none' }}>
            Daily Rewards
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;