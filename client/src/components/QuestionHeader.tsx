import { X } from "lucide-react";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { useState } from "react";

type QuestionHeaderProps = {
  progress: number;
};

export const QuestionHeader = ({ progress }: QuestionHeaderProps) => {
  const [open, setOpen] = useState(false);
  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <div className="w-full max-w-6xl mx-auto py-14 flex items-center justify-center gap-10">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <Button size="icon" variant="ghost">
            <X />
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-sm flex flex-col items-center">
          <img src="/mascot.svg" alt="mascot" className="mt-5" />
          <h2 className="text-2xl font-extrabold text-zinc-800 text-center my-2">
            Wait don't go! If you quit now you will lose all your progress
          </h2>

          <Button
            variant="primary"
            onClick={() => setOpen(false)}
            className="w-full"
          >
            Keep learning
          </Button>
          <Button asChild variant="dangerOutline" className="w-full">
            <Link to="/learn">end session</Link>
          </Button>
        </DialogContent>
      </Dialog>

      <Progress value={progress} />

      <div className="flex items-center gap-2">
        <img src="/heart.svg" alt="heart" />
        <p className="font-extrabold text-red-500">{user?.lifePoint}</p>
      </div>
    </div>
  );
};
