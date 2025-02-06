import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const XPProgress: React.FC = () => {
  const xp = useSelector((state: RootState) => state.game.userProgress.xp);

  return (
    <div>
      <h3>XP: {xp}</h3>
      <div style={{ width: "100%", backgroundColor: "#f0f0f0" }}>
        <div
          style={{
            width: `${(xp / 1000) * 100}%`,
            backgroundColor: "#4CAF50",
            height: "10px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default XPProgress;
