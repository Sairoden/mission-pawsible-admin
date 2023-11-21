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

  // SORT
  const sortByRaw = searchParams.get("sortBy") || "firstName-asc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  // PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    data: { data: users, count } = {},
    error,
    isLoading,
  } = useQuery({
    queryKey: ["users", sortBy, page],
    queryFn: () => getUsers({ page, sortBy }),
  });

  // PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["users", sortBy, sortBy, page + 1],
      queryFn: () => getUsers({ sortBy, page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["users", sortBy, page - 1],
      queryFn: () => getUsers({ sortBy, page: page - 1 }),
    });

  return { users, isLoading, error, count };
};
