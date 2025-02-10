import { RegisterForm } from "@/components/RegisterForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Button asChild className="absolute top-10 right-10">
        <Link to="/login">Login</Link>
      </Button>
      <div className="max-w-[400px] w-full">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
