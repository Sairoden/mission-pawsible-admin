// React & Libraries
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

// Services
import { getUsers } from "../../services";

// Utilities
import { PAGE_SIZE } from "../../utils";

export const useUsers = () => {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    data: { data: users, count } = {},
    error,
    isLoading,
  } = useQuery({
    queryKey: ["users", page],
    queryFn: () => getUsers({ page }),
  });

  // PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["users", page + 1],
      queryFn: () => getUsers({ page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["users", page - 1],
      queryFn: () => getUsers({ page: page - 1 }),
    });

  return { users, isLoading, error, count };
};
