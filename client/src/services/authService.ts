import axios from "axios";
import { RegisterFormData, AuthResponse } from "../types/user";

const API_URL = "http://localhost:5000/api/auth";

export const register = async (data: RegisterFormData): Promise<AuthResponse> => {
  try {
    const response = await axios.post(`${API_URL}/register`, data);
    return response.data;
  } catch (error: any) {
    console.error('Registration error details:', {
      status: error.response?.status,
      data: error.response?.data,
      message: error.message
    });
    const errorMessage = error.response?.data?.message || 
                        error.response?.data?.error || 
                        "Registration failed. Please try again.";
    throw new Error(errorMessage);
  }
};

export const login = async (email: string, password: string): Promise<AuthResponse> => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error: any) {
    let errorMessage = "Login failed. Please try again.";
    if (error.response?.status === 404) {
      errorMessage = 'User not found';
    } else if (error.response?.status === 500) {
      errorMessage = 'Server error. Please try again later.';
    } else if (error.response?.data?.message) {
      errorMessage = error.response.data.message;
    }
    throw new Error(errorMessage);
  }
};

export const logout = async (): Promise<void> => {
  await axios.post(`${API_URL}/logout`, null, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
}; 