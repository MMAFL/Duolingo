import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover";
  import { Button } from "./ui/button";
  import { useState } from "react";
  import { useSelector } from "react-redux";
  import { RootState } from "@/store/store";
  
  export const Heart = () => {
    const user = useSelector((state: RootState) => state.auth.user);
    const [open, setOpen] = useState(false);
  
    const handleMouseEnter = () => {
      setOpen(true);
    };
  
    const handleMouseLeave = () => {
      setOpen(false);
    };
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          asChild
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Button variant="ghost">
            <img src="/heart.svg" alt="heart" className="size-6 mr-5" />
            <p className="font-extrabold text-rose-500 tracking-wider">
              {user?.lifePoint}
            </p>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          side="bottom"
          className="px-7 w-[350px] py-5 rounded-2xl overflow-hidden shadow-none border-2 flex flex-col items-center gap-4"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h2 className="text-2xl font-extrabold text-zinc-700">Lives</h2>
          <div className="flex items-center gap-3">
            {user?.lifePoint &&
              user.lifePoint > 0 &&
              Array(user?.lifePoint)
                .fill(0)
                .map((_, index) => (
                  <img
                    key={index}
                    src="/heart.svg"
                    alt="heart"
                    className="size-7"
                  />
                ))}
          </div>
          <p className="text-lg font-extrabold text-zinc-700">
            {user?.lifePoint == 5
              ? "All lives are full"
              : `${user?.lifePoint} lives remaining`}
          </p>
          <p className="text-zinc-500 font-bold">Continue learning</p>
          <Button
            disabled={user?.gem! < 350}
            className="w-full flex items-center justify-between"
          >
            Refresh lives
            <span className="flex items-center gap-2">
              <img src="/gem.svg" alt="heart" className="size-5" />
              350
            </span>
          </Button>
        </PopoverContent>
      </Popover>
    );
  };
  