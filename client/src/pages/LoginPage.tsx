import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { login } from "../services/authService";
import { LoginFormData, AuthResponse } from "../types/user";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = async (data: LoginFormData) => {
    try {
      const response: AuthResponse = await login(data.email, data.password);
      localStorage.setItem("token", response.token);
      navigate("/dashboard");
    } catch (error: any) {
      console.error("Login failed:", error);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={handleLogin} />
      <p>
        Don't have an account?{" "}
        <button onClick={() => navigate("/register")}>Register</button>
      </p>
    </div>
  );
};

export default LoginPage; 