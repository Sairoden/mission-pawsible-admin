// React & Libraries
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

// Services
import { updatePet as updatePetApi } from "../../services";

export const useUpdatePet = () => {
  const queryClient = useQueryClient();

  const { mutate: updatePet, isLoading: isEditing } = useMutation({
    mutationFn: ({ newPetData, id }) => updatePetApi(newPetData, id),
    onSuccess: () => {
      toast.success("Pet successfully edited");
      queryClient.invalidateQueries({ queryKey: ["pets"] });
    },
    onError: err => toast.error(err.message),
  });

  return { updatePet, isEditing };
};
