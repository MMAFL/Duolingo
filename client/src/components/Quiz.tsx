import { updateUserProgress } from "@/data/UpdateUserProgress";
import { AppDispatch, RootState } from "@/store/store";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Question } from "./Question";
import { Question as QuestionType } from "@/types";
import { decreaseHearts } from "@/data/updateHearts";
import { setUser } from "@/features/auth/authSlice";
import { HeartModal } from "./HeartsModal";
import { toggleModal } from "@/features/modal/modalSlice";

type QuizProps = {
  questions: {
    totalQuestionsLength: number;
    completedQuestionsLength: number;
    notCompletedQuestions: QuestionType[];
  };
  lessonId: string;
};

export const Quiz = ({ questions, lessonId }: QuizProps) => {
  const [order, setOrder] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | undefined>("");
  const [status, setStatus] = useState<"correct" | "wrong" | "none">("none");
  const navigate = useNavigate();
  const [progress, setProgress] = useState(
    Math.floor(
      (questions.completedQuestionsLength / questions.totalQuestionsLength) *
        100
    )
  );

  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.auth.user);

  const { mutate } = useMutation({
    mutationFn: (data: {
      userId: string;
      lessonId: string;
      questionId: string;
    }) => updateUserProgress(data),
    onSuccess: (data) => {
      setStatus("correct");
      setProgress(
        (prev) => prev + Math.floor((1 / questions.totalQuestionsLength) * 100)
      );
      if (data.lessonCompleted) {
        navigate("/learn");
      }
    },
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    },
  });

  const { mutate: decreaseHeartsMutation } = useMutation({
    mutationFn: (data: { userId: string }) => decreaseHearts(data.userId),
    onSuccess: (data) => {
      dispatch(setUser(data));
    },
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    },
  });

  const actualQuestion = questions.notCompletedQuestions[order];
  const totalQuestion = questions.totalQuestionsLength;
  const completedLen = questions.completedQuestionsLength;

  const correctAudio = new Audio("/correct.mp3");
  const wrongAudio = new Audio("/wrong.mp3");

  const onNext = () => {
    setOrder((prev) => prev + 1);
  };

  const onSelect = (option: string) => {
    if (status !== "none") return;

    setSelectedOption(option);
  };

  const onContinue = () => {
    if (!selectedOption) return;

    if (status === "wrong") {
      setStatus("none");
      setSelectedOption(undefined);
      return;
    }

    if (status === "correct") {
      onNext();
      setStatus("none");
      setSelectedOption(undefined);
      return;
    }

    // Check if the selected option matches the correct answer
    if (selectedOption === actualQuestion.data.correctAnswer) {
      if (user && user?.lifePoint > 0) {
        mutate({
          userId: user.id,
          lessonId: lessonId as string,
          questionId: actualQuestion.id,
        });
        correctAudio.play();
      } else {
        dispatch(toggleModal());
      }
    } else {
      if (user && user.lifePoint > 0) {
        wrongAudio.play();
        decreaseHeartsMutation({ userId: user.id });
        setStatus("wrong");
      } else {
        dispatch(toggleModal());
      }
    }
  };

  return (
    <>
      <Question
        question={actualQuestion}
        progress={progress}
        onSelect={onSelect}
        selectedOption={selectedOption}
        totalQuestionLen={totalQuestion}
        completedLen={completedLen}
        status={status}
        onContinue={onContinue}
      />
      <HeartModal />
    </>
  );
};
