import { z } from "zod";

// Helper function to validate strong passwords
const strongPassword = (value: string) => {
  const hasUppercase = /[A-Z]/.test(value);
  const hasLowercase = /[a-z]/.test(value);
  const hasNumber = /[0-9]/.test(value);
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value);

  return (
    hasUppercase &&
    hasLowercase &&
    hasNumber &&
    hasSpecialChar &&
    value.length >= 8
  );
};

export const RegisterSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be longer than 3 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .refine(strongPassword, {
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    }),
});

export const LoginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(0, { message: "Password cannot be empty" }),
});
