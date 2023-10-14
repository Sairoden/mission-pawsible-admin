// React & Libraries
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

// Services
import { updateCurrentUser } from "../../services";

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: () => {
      toast.success("User successfully edited");
      queryClient.invalidateQueries({ queryKey: ["user"] });  
    },
    onErorr: err => toast.error(err.message),
  });

  return { updateUser, isUpdating };
};
