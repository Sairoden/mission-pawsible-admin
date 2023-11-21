// React & Libraries
import { useQuery } from "@tanstack/react-query";

// Services
import { getPetStats } from "../../services";

const usePetOwners = () => {
  const { data: petOwners, isLoading } = useQuery({
    queryKey: ["pets"],
    queryFn: getPetStats,
  });

  return { petOwners, isLoading };
};
