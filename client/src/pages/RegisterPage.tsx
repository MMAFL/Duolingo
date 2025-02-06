import React from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import { register } from "../services/authService";
import { RegisterFormData, AuthResponse } from "../types/user";

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  const handleRegister = async (data: RegisterFormData) => {
    try {
      const response: AuthResponse = await register(data);
      localStorage.setItem("token", response.token);
      navigate("/login");
    } catch (error: any) {
      console.error("Registration failed:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <RegisterForm onSubmit={handleRegister} />
      <p>
        Already have an account?{" "}
        <button onClick={() => navigate("/login")}>Login</button>
      </p>
    </div>
  );
};

export default RegisterPage; 