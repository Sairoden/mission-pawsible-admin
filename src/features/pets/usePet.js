// React & Libraries
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

// Services
import { getSinglePet } from "../../services";

export function usePet() {
  const { petId } = useParams();

  const {
    isLoading,
    data: pet,
    error,
  } = useQuery({
    queryKey: ["pet", petId],
    queryFn: () => getSinglePet(petId),
    retry: false,
  });

  return { isLoading, error, pet };
}
