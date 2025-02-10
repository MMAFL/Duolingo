import { OptionsCard } from "./OptionsCard";

type QuestionOptionsProps = {
  options: string[];
  status: "correct" | "wrong" | "none";
  selectedOption: string | undefined;
  disabled?: boolean;
  onSelect: (option: string) => void;
};

export const QuestionOptions = ({
  options,
  status,
  selectedOption,
  disabled,
  onSelect,
}: QuestionOptionsProps) => {
  return (
    <div className="grid gap-2 grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))]">
      {options.map((option) => (
        <OptionsCard
          key={option}
          text={option}
          selected={selectedOption === option}
          onClick={() => onSelect(option)}
          status={status}
          disabled={disabled}
        />
      ))}
    </div>
  );
};
