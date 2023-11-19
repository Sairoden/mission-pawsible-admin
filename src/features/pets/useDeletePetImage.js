// React & Libraries
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

// Services
import { deletePetImage as deletePetImageApi } from "../../services";

export const useDeletePetImage = () => {
  const queryClient = useQueryClient();

  const { mutate: deletePetImage, isLoading: isDeleting } = useMutation({
    mutationFn: deletePetImageApi,
    onSuccess: () => {
      toast.success("Pet image is successfully deleted");
      queryClient.invalidateQueries({ queryKey: ["pets"] });
    },
    onError: err => toast.error(err.message),
  });

  return { deletePetImage, isDeleting };
};
