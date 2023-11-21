// React & Libraries
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

// Services
import { getAllPets } from "../../services";

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

  // SORT
  const sortBy = searchParams.get("sortBy") || "Oldest";

  // PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    data: { data: pets, count } = {},
    error,
    isLoading,
  } = useQuery({
    queryKey: ["pets", filter, sortBy, page],
    queryFn: () => getAllPets({ filter, sortBy, page }),
  });

  // PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["pets", filter, sortBy, page + 1],
      queryFn: () => getAllPets({ filter, sortBy, page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["pets", filter, sortBy, page - 1],
      queryFn: () => getAllPets({ filter, sortBy, page: page - 1 }),
    });

  return { pets, isLoading, error, count };
};
