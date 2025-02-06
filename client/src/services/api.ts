import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

// Fetch user progress
export const fetchUserProgress = async (userId: number) => {
  const response = await axios.get(`${API_BASE_URL}/user-progress/${userId}`);
  return response.data;
};

// Fetch levels and lessons
export const fetchLevels = async () => {
  const response = await axios.get(`${API_BASE_URL}/levels`);
  return response.data;
};

// Fetch daily rewards
export const fetchDailyRewards = async (userId: number) => {
  const response = await axios.get(`${API_BASE_URL}/daily-rewards/${userId}`);
  return response.data;
};
