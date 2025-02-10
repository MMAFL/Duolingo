import { Loading } from "@/components/Loading";
import { RightSidebar } from "@/components/RightSidebar";
import { getLeaderboard } from "@/data/getLeaderboard";
import { useQuery } from "@tanstack/react-query";

const Leaderboard = () => {
  const { data: leaderboard, isLoading } = useQuery({
    queryKey: ["leaderboard"],
    queryFn: getLeaderboard,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (!leaderboard) {
    return null;
  }

  return (
    <div className="flex gap-10 max-w-5xl mx-auto p-5">
      <div className="flex-1 flex flex-col items-center pt-10">
        <img src="/leaderboard.svg" alt="leaderboard" className="size-32" />
        <h1 className="text-3xl font-extrabold text-neutral-800 my-8">
          Leaderboard
        </h1>
        <p className="text-xl font-bold text-muted-foreground">
          Look at your position in the global ranking
        </p>

        <div className="max-w-md w-full h-[2px] rounded-full mt-10 mb-6 bg-neutral-200" />

        {leaderboard.map((user, index) => (
          <div className="w-full p-5  max-w-md rounded-xl flex items-center justify-between transition-all duration-150 hover:bg-neutral-100/75">
            <div className="flex items-center gap-5">
              <p className="text-green-400 font-bold">{index + 1}</p>
              <p className="bg-purple-900/80 text-white font-semibold size-10 flex items-center justify-center rounded-full">
                {user.username.toUpperCase().at(0)}
              </p>
              <p className="font-semibold">{user.username}</p>
            </div>
            <p className="text-neutral-700 font-bold">{user.point} points</p>
          </div>
        ))}
      </div>
      <RightSidebar />
    </div>
  );
};

export default Leaderboard;
