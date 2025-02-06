import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Profile: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user); // Assuming you have an auth slice

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ color: "#343a40" }}>Profile</h2>
      <div
        style={{
          backgroundColor: "#f8f9fa",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <p>
          <strong>Username:</strong> {user?.username}
        </p>
        <p>
          <strong>Email:</strong> {user?.email}
        </p>
        <p>
          <strong>Joined:</strong> {user?.createdAt}
        </p>
      </div>
    </div>
  );
};

export default Profile;
