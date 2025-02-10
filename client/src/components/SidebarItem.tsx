import { Link } from "react-router-dom";
import { Button } from "./ui/button";

interface SidebarItemProps {
  label: string;
  href: string;
  iconSrc: string;
}

export const SidebarItem = ({ label, href, iconSrc }: SidebarItemProps) => {
  const pathname = window.location.pathname;
  const isActive = pathname === href;
  return (
    <Button
      asChild
      variant={isActive ? "sidebarOutline" : "sidebar"}
      className="h-12 justify-start"
    >
      <Link to={href} className="flex items-center gap-2">
        <img src={iconSrc} alt={label} className="size-7" />
        {label}
      </Link>
    </Button>
  );
};
