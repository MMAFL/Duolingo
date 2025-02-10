import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Dialog, DialogContent } from "./ui/dialog";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { toggleModal } from "@/features/modal/modalSlice";

export const HeartModal = () => {
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);

  const dispatch = useDispatch<AppDispatch>();
  const closeModal = () => {
    dispatch(toggleModal());
  };

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="max-w-sm flex flex-col items-center">
        <img src="/mascot.svg" alt="mascot" className="mt-5" />
        <h2 className="text-2xl font-extrabold text-zinc-800 text-center my-2">
          You have no hearts... Please visit shop page
        </h2>

        <Button asChild variant="primary" className="w-full">
          <Link to="/shop">Shop</Link>
        </Button>
        <Button
          variant="dangerOutline"
          className="w-full"
          onClick={() => closeModal()}
        >
          close
        </Button>
      </DialogContent>
    </Dialog>
  );
};
