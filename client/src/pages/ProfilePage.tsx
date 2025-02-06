import React from "react";
import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";

const ProfilePage: React.FC = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Profile />
    </div>
  );
};

export default ProfilePage;
