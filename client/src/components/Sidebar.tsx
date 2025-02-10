import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { SidebarItem } from "./SidebarItem";
import { MoreButton } from "./MoreButton";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  return (
    <div
      className={cn(
        "lg:fixed left-0 top-0  lg:w-[256px] flex flex-col p-5 h-full border-r-2",
        className
      )}
    >
      <Link to="/learn">
        <div className="p-5 flex items-center gap-4">
          <img src="/mascot.svg" alt="logo" className="size-12" />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            Lingo
          </h1>
        </div>
      </Link>

      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem label="learn" href="/learn" iconSrc="/learn.svg" />
        <SidebarItem
          label="leaderboard"
          href="/leaderboard"
          iconSrc="/leaderboard.svg"
        />
        <SidebarItem label="shop" href="/shop" iconSrc="/shop.svg" />
        <MoreButton />
      </div>
    </div>
  );
};
