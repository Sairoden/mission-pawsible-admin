// React & Libraries
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

// Services
import { updateSetting as updateSettingApi } from "../../services";

export const useUpdateSetting = () => {
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("Setting successfully edited");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onErorr: err => toast.error(err.message),
  });

  return { updateSetting, isUpdating };
};
