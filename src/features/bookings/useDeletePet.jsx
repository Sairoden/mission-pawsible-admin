// React & Libraries
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

// Services
import { deletePet as deletePetApi } from "../../services";

export const useDeletePet = () => {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deletePet } = useMutation({
    mutationFn: deletePetApi,
    onSuccess: () => {
      toast.success("Pet successfully deleted!");
      queryClient.invalidateQueries({ queryKey: ["pets"] });
    },
    onError: err => {
      toast.error(err.message);
    },
  });

  return { isDeleting, deletePet };
};
