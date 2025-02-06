import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { claimDailyReward } from "../store/slices/gameSlice";

const DailyRewards: React.FC = () => {
  const dispatch = useDispatch();
  const dailyRewards = useSelector(
    (state: RootState) => state.game.dailyRewards
  );

  const handleClaimReward = (rewardId: number) => {
    dispatch(claimDailyReward({ rewardId }));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ color: "#343a40" }}>Daily Rewards</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {dailyRewards.map((reward) => (
          <li
            key={reward.rewardId}
            style={{
              backgroundColor: "#f8f9fa",
              padding: "15px",
              margin: "10px 0",
              borderRadius: "8px",
              border: "1px solid #e0e0e0",
            }}
          >
            <p style={{ color: "#343a40" }}>
              <strong>Unlock Points:</strong> {reward.unlockPoints}
            </p>
            <button
              onClick={() => handleClaimReward(reward.rewardId)}
              disabled={reward.claimed}
              style={{
                backgroundColor: reward.claimed ? "#4CAF50" : "#007bff",
                color: "#ffffff",
                border: "none",
                padding: "8px 16px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              {reward.claimed ? "Claimed" : "Claim Reward"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailyRewards;
