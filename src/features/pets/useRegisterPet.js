// React & Libraries
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

// Services
import { createPet } from "../../services";

export const useRegisterPet = () => {
  const queryClient = useQueryClient();

  const { mutate: registerPet, isLoading: isCreating } = useMutation({
    mutationFn: createPet,
    onSuccess: () => {
      toast.success("New pet successfully registered");
      queryClient.invalidateQueries({ queryKey: ["pets"] });
    },
    onError: err => toast.error(err.message),
  });

  return { registerPet, isCreating };
};
