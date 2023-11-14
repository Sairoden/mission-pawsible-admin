// React & Libraries
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

// Services
import { getPets } from "../../services";

// Utilities
import { PAGE_SIZE } from "../../utils";

export const usePets = () => {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // FITER
  const filterValue = searchParams.get("status") || "all";
  const filter =
    filterValue === "all"
      ? null
      : { field: "status", value: filterValue, method: "eq" };

  // PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    data: { data: pets, count } = {},
    error,
    isLoading,
  } = useQuery({
    queryKey: ["pets", filter, page],
    queryFn: () => getPets({ filter, page }),
  });

  // PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["pets", filter, page + 1],
      queryFn: () => getPets({ filter, page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["pets", filter, page - 1],
      queryFn: () => getPets({ filter, page: page - 1 }),
    });

  return { pets, isLoading, error, count };
};
