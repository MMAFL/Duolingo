type QuestionSentenceProps = {
    question: string;
  };
  
  export const QuestionSentence = ({ question }: QuestionSentenceProps) => {
    return (
      <div className="flex items-center gap-10">
        <img src="/mascot.svg" alt="" />
        <h1 className="text-3xl relative font-extrabold text-neutral-700 border-2 p-5 rounded-2xl">
          {question}
          <div className="absolute size-0 border-x-8 border-t-8 border-x-transparent rotate-90 -left-3 top-1/2" />
        </h1>
      </div>
    );
  };
  