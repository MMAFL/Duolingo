import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/profile.css";


interface User {
  user_id: number;
  username: string;
  email: string;
  profile_picture: string | null;
  xp_points: number;
  streak_days: number;
  created_at: Date;
}

const Profile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const following = 3;
  const followers = 3;

  // Get userId from auth context or URL params
  const userId = localStorage.getItem('userId') || '1';

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/${userId}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setUser(response.data);
      } catch (error) {
        setError("Failed to fetch user data");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!user) return <div className="no-data">No user data found</div>;

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-edit">
          <button className="edit-button">
            <img src="/edit-icon.svg" alt="Edit" />
          </button>
        </div>
        
        <div className="profile-info">
          <img
            className="profile-picture"
            src={user.profile_picture || "https://www.gravatar.com/avatar/default?s=200"}
            alt="Profile"
          />
          <h2 className="username">{user.username}</h2>
          <p className="join-date">
            Joined {new Date(user.created_at).toLocaleDateString('en-US', { 
              month: 'long', 
              year: 'numeric' 
            })}
          </p>
        </div>
        
        <div className="profile-stats">
          <div className="stat-item">
            <span className="stat-value">{following}</span>
            <span className="stat-label">Following</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{followers}</span>
            <span className="stat-label">Followers</span>
          </div>
        </div>

        <div className="user-metrics">
          <div className="metric">
            <img src="https://d35aaqx5ub95lt.cloudfront.net/images/icons/398e4298a3b39ce566050e5c041949ef.svg" alt="XP" />
            <span>{user.xp_points}</span>
            <span>Total XP</span>
          </div>
          <div className="metric">
            <img src="https://d35aaqx5ub95lt.cloudfront.net/images/icons/c0a3e03164a907f0be432178cca6ef56.svg" alt="Streak" />
            <span>{user.streak_days}</span>
            <span>Day streak</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
