import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import XPProgress from "./XPProgress";
import HeartsDisplay from "./HeartsDisplay";

const Dashboard: React.FC = () => {
  const userProgress = useSelector(
    (state: RootState) => state.game.userProgress
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ color: "#343a40" }}>Dashboard</h2>
      <div
        style={{
          backgroundColor: "#f8f9fa",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <XPProgress />
        <HeartsDisplay />
        <p>
          <strong>Unlock Points:</strong> {userProgress.unlockPoints}
        </p>
        <p>
          <strong>Streak:</strong> {userProgress.streakDays} days
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
