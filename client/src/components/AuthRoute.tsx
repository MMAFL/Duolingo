import { RootState } from "@/store/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const AuthRoute = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (user !== null) {
      navigate("/learn");
    }
  }, [user]);

  if (user == null) {
    return <Outlet />;
  }
};

export default AuthRoute;
