// React & Libraries
import { useQuery } from "@tanstack/react-query";

// Services
import { getPetStats } from "../../services";

export const usePetStats = () => {
  const { data: petStats, isLoading } = useQuery({
    queryKey: ["petStats"],
    queryFn: getPetStats,
  });

  return { petStats, isLoading };
};
