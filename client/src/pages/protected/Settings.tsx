import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import { FaUser, FaEnvelope, FaGem } from "react-icons/fa"; // Icons for user info

export const Settings = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.auth.user);
  const [email, setEmail] = useState(user?.email || "");

  // Mutation to handle password reset request
  const { mutate: resetPasswordMutation, isPending } = useMutation({
    mutationFn: async (email: string) => {
      const response = await axios.post(
        "http://localhost:3000/api/auth/reset-password",
        { email }
      );
      return response.data;
    },
    onSuccess: () => {
      toast.success("Password reset email sent. Check your inbox.");
    },
    onError: () => {
      toast.error("Failed to send password reset email.");
    },
  });

  const handleResetPassword = () => {
    if (!email) {
      toast.error("Email is required.");
      return;
    }
    resetPasswordMutation(email);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-[#007bff]">Settings</h1>

      {/* User Information Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4 text-[#007bff] flex items-center gap-2">
          <FaUser className="text-[#007bff]" />
          User Information
        </h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <FaUser className="text-[#007bff]" />
            <div>
              <p className="text-sm text-[#4CAF50]">Username</p>
              <p className="text-lg font-semibold text-gray-600">
                {user?.username}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-[#007bff]" />
            <div>
              <p className="text-sm text-[#4CAF50]">Email</p>
              <p className="text-lg font-semibold text-gray-600">
                {user?.email}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaGem className="text-[#007bff]" />
            <div>
              <p className="text-sm text-[#4CAF50]">Gems</p>
              <p className="text-lg font-semibold text-gray-600">{user?.gem}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Password Reset Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-[#007bff] flex items-center gap-2">
          <FaEnvelope className="text-[#007bff]" />
          Reset Password
        </h2>
        <p className="mb-4 text-[#4CAF50]">
          Enter your email address to receive a password reset link.
        </p>
        <div className="flex gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
          />
          <Button
            onClick={handleResetPassword}
            disabled={isPending}
            className="bg-[#007bff] hover:bg-[#0056b3] text-white font-semibold"
          >
            {isPending ? "Sending..." : "Reset Password"}
          </Button>
        </div>
      </div>
    </div>
  );
};
