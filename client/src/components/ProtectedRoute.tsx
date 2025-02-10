import { RootState } from "@/store/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { MobileHeader } from "./MobileHeader";

const ProtectedRoute = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (user == null) {
      navigate("/login");
    }
  }, [user]);

  if (user !== null) {
    return (
      <div>
        <Sidebar className="hidden lg:flex" />
        <MobileHeader />
        <div className="h-full lg:pl-[256px] pt-12 lg:pt-0">
          <div className="h-screen">
            <Outlet />
          </div>
        </div>
      </div>
    );
  }
};

export default ProtectedRoute;
