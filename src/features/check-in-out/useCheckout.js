// React & Libraries
import { useMutation, useQueryClient } from "@tanstack/react-query";

// Styles
import toast from "react-hot-toast";

// Services
import { updateBooking } from "../../services";

export const useCheckout = () => {
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: bookingId =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),

    onSuccess: data => {
      toast.success(`Booking #${data.id} successfully checked out`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => toast.error("There was an error while checking out"),
  });

  return { checkout, isCheckingOut };
};
