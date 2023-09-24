// React & Libraries
import { useQuery } from "@tanstack/react-query";

// Services
import { getSettings } from "../../services/apiSettings";

export const useSettings = () => {
  const {
    isLoading,
    error,
    data: settings,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  return { isLoading, error, settings };
};
