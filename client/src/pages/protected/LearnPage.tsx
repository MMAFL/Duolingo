import { Feed } from "@/components/Feed";
import { RightSidebar } from "@/components/RightSidebar";

const LearnPage = () => {
  return (
    <div className="flex gap-10 max-w-5xl mx-auto p-5">
      <Feed />
      <RightSidebar />
    </div>
  );
};

export default LearnPage;
