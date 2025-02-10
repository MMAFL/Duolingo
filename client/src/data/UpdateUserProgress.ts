import axios from "axios";

axios.defaults.withCredentials = true;

export const updateUserProgress = async (data: {
  userId: string;
  lessonId: string;
  questionId: string;
}) => {
  // console.log(data);
  const response = await axios.put(
    "http://localhost:3000/api/user-progress",
    data
  );
  return response.data;
};
