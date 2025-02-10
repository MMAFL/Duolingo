import { UserProgress } from "@/types";
import axios from "axios";

axios.defaults.withCredentials = true;

export const getUserProgress = async () => {
  const user = await axios.get("http://localhost:3000/api/auth/getUser");
  const userId = user.data;
  const response = await axios.get<UserProgress>(
    "http://localhost:3000/api/user-progress/" + userId
  );

  return response.data;
};
