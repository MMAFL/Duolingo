import React from "react";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";

const DashboardPage: React.FC = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default DashboardPage;
