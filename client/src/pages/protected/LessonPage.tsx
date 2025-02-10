import { Loading } from "@/components/Loading";
import { Quiz } from "@/components/Quiz";
import { getQuestions } from "@/data/getQuestions";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

const LessonPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: questions, isLoading } = useQuery({
    queryKey: ["questions", id],
    queryFn: () => getQuestions(id as string),
  });

  if (isLoading || !questions || !id) {
    return <Loading />;
  }

  // Redirect if there are no questions left to complete
  if (questions.notCompletedQuestions.length === 0) {
    return navigate("/learn");
  }

  return <Quiz questions={questions} lessonId={id} />;
};

export default LessonPage;
