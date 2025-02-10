import { Loading } from "@/components/Loading";
import { RightSidebar } from "@/components/RightSidebar";
import { Button } from "@/components/ui/button";
import { refillHearts } from "@/data/refillHearts";
import { setUser } from "@/features/auth/authSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useMutation } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const ShopPage = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch<AppDispatch>();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: { userId: string }) => {
      return refillHearts(data.userId);
    },
    onSuccess: (data) => {
      toast.success("Purchase successful");
      dispatch(setUser(data));
    },
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    },
  });

  if (!user) {
    return <Loading />;
  }

  return (
    <div className="flex gap-10 max-w-5xl mx-auto p-5">
      <div className="flex-1 flex flex-col items-center pt-10">
        <img src="/shop.svg" alt="shop" className="size-32" />
        <h1 className="text-3xl font-extrabold text-neutral-800 my-8">Shop</h1>
        <p className="text-xl font-bold text-muted-foreground">
          Spend your gems to refill your hearts
        </p>

        <div className="max-w-md w-full h-[2px] rounded-full mt-10 mb-6 bg-neutral-200"></div>
        <div className="max-w-md w-full p-5  flex items-start justify-between hover:bg-neutral-100/75 rounded-xl transition-all duration-150">
          <div className="flex items-center gap-4">
            <img src="/heart.svg" alt="heart" className="size-12" />
            <h2 className="text-xl font-extrabold text-neutral-800">
              Refill your hearts
            </h2>
          </div>
          <Button
            disabled={isPending || user.lifePoint == 5 || user.gem < 50}
            onClick={() => mutate({ userId: user.id })}
          >
            <img
              src="https://d35aaqx5ub95lt.cloudfront.net/images/gems/45c14e05be9c1af1d7d0b54c6eed7eee.svg"
              alt="gem"
              className="size-6 mr-2"
            />
            50
          </Button>
        </div>
      </div>
      <RightSidebar />
    </div>
  );
};

export default ShopPage;
