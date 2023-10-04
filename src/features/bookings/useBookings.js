// React & Libraries
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

// Services
import { getBookings } from "../../services";

export const useBookings = () => {
  const [searchParams] = useSearchParams();

  // FITER
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue, method: "eq" };

  const {
    data: bookings,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bookings", filter],
    queryFn: () => getBookings({ filter }),
  });

  return { bookings, isLoading, error };
};
