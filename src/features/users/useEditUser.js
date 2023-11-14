// React & Libraries
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

// Services
import { editUser as editUserApi } from "../../services";

export const useEditUser = () => {
  const queryClient = useQueryClient();

  const { mutate: editUser, isLoading: isEditing } = useMutation({
    mutationFn: ({ newUserData, id }) => editUserApi(newUserData, id),
    onSuccess: () => {
      toast.success("User successfully edited");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: err => toast.error(err.message),
  });

  return { editUser, isEditing };
};
