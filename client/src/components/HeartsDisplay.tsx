import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const HeartsDisplay: React.FC = () => {
  const hearts = useSelector(
    (state: RootState) => state.game.userProgress.hearts
  );

  return (
    <div>
      <h3>Hearts: {hearts}</h3>
      <div style={{ display: "flex", gap: "5px" }}>
        {Array.from({ length: hearts }, (_, i) => (
          <span key={i} style={{ color: "red" }}>
            ❤️
          </span>
        ))}
      </div>
    </div>
  );
};

export default HeartsDisplay;
