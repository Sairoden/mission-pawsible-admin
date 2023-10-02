// React & Libraries
import { useQuery } from "@tanstack/react-query";

// Services
import { getBookings } from "../../services";

export const useBookings = () => {
  const {
    data: bookings,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });

  return { bookings, isLoading, error };
};
