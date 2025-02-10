import axios from "axios";

axios.defaults.withCredentials = true;

export const decreaseHearts = async (userId: string) => {
  const response = await axios.post(
    "http://localhost:3000/api/user-progress/hearts",
    { userId }
  );

  return response.data;
};
