// React & Libraries
import { useQuery } from "@tanstack/react-query";

// Services
import { getAllUsers } from "../../services";

export const useAllUsers = () => {
  const { data: allUsers, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  return { allUsers, isLoading };
};
