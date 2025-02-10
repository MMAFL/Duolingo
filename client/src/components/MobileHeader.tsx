import { MobileSidebar } from "./MobileSidebar";

export const MobileHeader = () => {
  return (
    <div className="flex lg:hidden h-12 items-center bg-green-500 px-5 border-b-2 fixed left-0 top-0 w-full z-50 ">
      <MobileSidebar />
    </div>
  );
};
