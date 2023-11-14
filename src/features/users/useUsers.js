// React & Libraries
import { useQuery } from "@tanstack/react-query";

// Services
import { getUsers } from "../../services";

export const useUsers = () => {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  return { users, isLoading, error };
};
