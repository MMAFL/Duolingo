import { getUnits } from "@/data/getUnits";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "./Loading";
import { Unit } from "./Unit";

export const Feed = () => {
  const { data: units, isPending } = useQuery({
    queryFn: getUnits,
    queryKey: ["units"],
  });

  if (isPending) {
    return <Loading />;
  }

  return (
    <div className="flex-1 flex flex-col gap-2">
      {units?.map((unit) => (
        <Unit key={unit.id} unit={unit} />
      ))}
    </div>
  );
};
