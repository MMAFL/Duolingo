import React from "react";
import Sidebar from "../components/Sidebar";
import DailyRewards from "../components/DailyRewards";

const DailyRewardsPage: React.FC = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <DailyRewards />
    </div>
  );
};

export default DailyRewardsPage;
