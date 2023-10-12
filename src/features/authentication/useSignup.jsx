// React & Libraries
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

// Services
import { signup as signupApi } from "../../services";

export const useSignup = () => {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success(
        "Account successfully registered! Please verify the new account from the user's email address."
      );
    },
  });

  return { signup, isLoading };
};
