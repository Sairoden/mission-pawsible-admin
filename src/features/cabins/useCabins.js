// React & Libraries
import { useQuery } from "@tanstack/react-query";

// Services
import { getCabins } from "../../services";

export const useCabins = () => {
  const {
    data: cabins,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  return { cabins, isLoading, error };
};
