import axios from "axios";

axios.defaults.withCredentials = true;

export const refillHearts = async (userId: string) => {
  const response = await axios.post(
    "http://localhost:3000/api/user-progress/refillHearts",
    { userId }
  );

  // console.log(response);

  return response.data;
};
