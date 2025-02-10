import { LoginForm } from "@/components/LoginForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Button asChild className="absolute top-10 right-10">
        <Link to="/register">Sign Up</Link>
      </Button>
      <div className="max-w-[400px] w-full">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
