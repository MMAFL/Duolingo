import { RightbarHeader } from "./RightbarHeader";

export const RightSidebar = () => {
  return (
    <div className="w-[360px] lg:block hidden">
      <div className="sticky top-6 flex flex-col gap-y-4">
        <RightbarHeader />
      </div>
    </div>
  );
};
