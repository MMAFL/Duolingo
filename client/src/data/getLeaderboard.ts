import { User } from "@/types";
import axios from "axios";

export const getLeaderboard = async () => {
  const response = await axios.get<User[]>(
    "http://localhost:3000/api/user-progress/leaderboard"
  );
  const data = response.data;

  return data;
};
