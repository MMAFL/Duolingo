import { LoginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { deleteUser, setUser } from "@/features/auth/authSlice";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { mutate: LoginMutation, isPending } = useMutation({
    mutationFn: async (data: z.infer<typeof LoginSchema>) => {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        data
      );
      return response.data;
    },
    onSuccess: (data) => {
      dispatch(setUser(data));
      toast.success(`Login successful`);
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/learn");
    },
    onError: (error: AxiosError<{ message: string }>) => {
      dispatch(deleteUser());
      toast.error(error.response?.data?.message);
    },
  });

  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
    LoginMutation(data);
  };

  return (
    <div className="flex flex-col items-center px-5">
      <h1 className="text-2xl font-extrabold text-zinc-700 tracking-wide mb-8">
        Log in
      </h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-full"
        >
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
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={isPending} variant="primary" className="w-full">
            {isPending ? "..." : "Log in"}
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
