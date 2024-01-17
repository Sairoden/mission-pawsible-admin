// React & Libraries
import { useQuery } from "@tanstack/react-query";

// Services
import { getPetsVerfication } from "../../services";

export const usePetsVerfication = () => {
  const { data: petsVerification, isLoading } = useQuery({
    queryKey: ["petsVerfication"],
    queryFn: getPetsVerfication,
  });

  return { petsVerification, isLoading };
};
