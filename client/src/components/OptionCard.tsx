import { cn } from "@/lib/utils";

type OptionsCardProps = {
  text: string;
  selected?: boolean;
  onClick: () => void;
  disabled?: boolean;
  status?: "correct" | "wrong" | "none";
};

export const OptionsCard = ({
  text,
  selected,
  onClick,
  disabled,
  status,
}: OptionsCardProps) => {
  const handleClick = () => {
    if (disabled) return;

    onClick();
  };

  return (
    <div
      onClick={handleClick}
      className={cn(
        "h-full border-2 rounded-xl border-b-4 hover:bg-black/5 p-4 lg:p-6 cursor-pointer active:border-b-2",
        selected && "border-sky-300 bg-sky-100 hover:bg-sky-100",
        selected &&
          status === "correct" &&
          "border-green-300 bg-green-100 hover:bg-green-100",
        selected &&
          status === "wrong" &&
          "border-rose-300 bg-rose-100 hover:bg-rose-100",
        disabled && "pointer-events-none hover:bg-white"
      )}
    >
      <p
        className={cn(
          "text-neutral-600 text-sm lg:text-base font-bold text-center",
          selected && "text-sky-500",
          selected && status === "correct" && "text-green-500",
          selected && status === "wrong" && "text-rose-500"
        )}
      >
        {text}
      </p>
    </div>
  );
};
