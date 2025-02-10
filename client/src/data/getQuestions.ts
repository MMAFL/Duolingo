import axios from "axios";
import { getUserProgress } from "./getUserProgress";
import { Question } from "@/types";

export const getQuestions = async (lessonId: string) => {
  const questionResponse = await axios.get<Question[]>(
    `http://localhost:3000/api/question/${lessonId}`
  );

  const questions = questionResponse.data;

  const progress = await getUserProgress();

  const filteredQuestions = questions.filter(
    (q) => !progress.completedQuestions.includes(q.id)
  );

  return {
    totalQuestionsLength: questions.length,
    completedQuestionsLength: questions.length - filteredQuestions.length,
    notCompletedQuestions: filteredQuestions,
  };
};
