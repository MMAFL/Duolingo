import { Question as QuestionType } from "@/types";
import { QuestionHeader } from "./QuestionHeader";
import { QuestionSentence } from "./QuestionSentence";
import { QuestionOptions } from "./QuestionOptions";
import { QuestionFooter } from "./QuestionFooter";

type QuestionProps = {
  question: QuestionType;
  progress: number;
  totalQuestionLen: number;
  completedLen: number;
  status: "correct" | "wrong" | "none";
  onSelect: (option: string) => void;
  selectedOption: string | undefined;
  onContinue: () => void;
};

export const Question = ({
  question,
  progress,
  selectedOption,
  onSelect,
  status,
  onContinue,
}: QuestionProps) => {
  return (
    <div className="flex flex-col h-screen">
      <QuestionHeader progress={progress} />
      <div className="h-full flex flex-col items-center">
        <div className="max-w-6xl mx-auto flex-1 w-full px-20 flex flex-col justify-center gap-10">
          <QuestionSentence question={question.data.question} />
          <QuestionOptions
            options={question.data.options}
            status={status}
            selectedOption={selectedOption}
            disabled={false}
            onSelect={onSelect}
          />
        </div>
        <QuestionFooter
          disabled={!selectedOption}
          status={status}
          onCheck={onContinue}
        />
      </div>
    </div>
  );
};
