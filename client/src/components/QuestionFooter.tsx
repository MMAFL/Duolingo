import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { CheckCircle, XCircle } from "lucide-react";

type QuestionFooterProps = {
  onCheck: () => void;
  status: "correct" | "wrong" | "none";
  disabled?: boolean;
};

export const QuestionFooter = ({
  onCheck,
  status,
  disabled,
}: QuestionFooterProps) => {
  return (
    <div
      className={cn(
        "h-24 lg:h-36 border-t-2 w-full",
        status === "correct" && "border-transparent bg-green-100",
        status === "wrong" && "border-transparent bg-rose-100"
      )}
    >
      <div className="max-w-6xl h-full mx-auto flex items-center justify-between px-6 lg:px-10">
        {status === "correct" && (
          <div className="text-green-500 font-bold lg:text-2xl flex items-center">
            <CheckCircle className="size-6 lg:size-10 mr-4" />
            Well done!
          </div>
        )}
        {status === "wrong" && (
          <div className="text-rose-500 font-bold lg:text-2xl flex items-center">
            <XCircle className="size-6 lg:size-10 mr-4" />
            Oo! You failed...
          </div>
        )}
        <Button
          variant={status === "wrong" ? "danger" : "secondary"}
          disabled={disabled}
          className="ml-auto"
          onClick={onCheck}
        >
          {status === "none" && "Check"}
          {status === "correct" && "Next"}
          {status === "wrong" && "Retry"}
        </Button>
      </div>
    </div>
  );
};
