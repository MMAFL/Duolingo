import { Flag } from "./Flag";
import { Gem } from "./Gem";
import { Heart } from "./Hearts";

export const RightbarHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <Flag />
      <Gem />
      <Heart />
    </div>
  );
};
