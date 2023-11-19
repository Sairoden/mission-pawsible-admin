// React & Libraries
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

// Services
import { updatePetStatus as updatePetStatusApi } from "../../services";

export const useUpdatePetStatus = () => {
  const queryClient = useQueryClient();

  const { mutate: updatePetStatus, isLoading: isUpdating } = useMutation({
    mutationFn: updatePetStatusApi,
    onSuccess: () => {
      toast.success("Pet is successfully reunited");
      queryClient.invalidateQueries({ queryKey: ["pets"] });
    },
    onError: err => toast.error(err.message),
  });

  return { updatePetStatus, isUpdating };
};
