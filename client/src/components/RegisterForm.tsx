import { RegisterSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FcGoogle } from "react-icons/fc";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { deleteUser, setUser } from "@/features/auth/authSlice";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export const RegisterForm = () => {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { mutate: RegisterMutation, isPending } = useMutation({
    mutationFn: async (data: z.infer<typeof RegisterSchema>) => {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        data
      );

      return response.data;
    },
    onSuccess: (data) => {
      dispatch(setUser(data));
      toast.success(`Registration successful`);
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/learn");
    },
    onError: (error: AxiosError<{ message: string }>) => {
      dispatch(deleteUser());
      toast.error(error.response?.data?.message);
    },
  });

  const onSubmit = (data: z.infer<typeof RegisterSchema>) => {
    RegisterMutation(data);
  };

  return (
    <div className="flex flex-col items-center px-5">
      <h1 className="text-2xl font-extrabold text-zinc-700 tracking-wide mb-8">
        Create your profile
      </h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-full"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Password" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            disabled={isPending}
            type="submit"
            variant="primary"
            className="w-full"
          >
            {isPending ? "..." : "Create account"}
          </Button>
        </form>
      </Form>

      <div className="w-full h-[2px] bg-slate-300 my-5 relative">
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 text-slate-400 font-bold">
          OR
        </span>
      </div>

      <Button className="w-full flex items-center gap-2">
        <FcGoogle className="size-5" />
        Google
      </Button>
    </div>
  );
};
