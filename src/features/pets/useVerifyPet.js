// React & Libraries
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

// Services
import { verifyPet as verifyPetApi } from "../../services";

export const useVerifyPet = () => {
  const queryClient = useQueryClient();

  const { mutate: verifyPet, isLoading: isUpdating } = useMutation({
    mutationFn: verifyPetApi,
    onSuccess: () => {
      toast.success("Pet is successfully verified");
      queryClient.invalidateQueries({ queryKey: ["pets"] });
    },
    onError: err => toast.error(err.message),
  });

  return { verifyPet, isUpdating };
};
