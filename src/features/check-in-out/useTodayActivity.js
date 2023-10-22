// React & Libraries
import { useQuery } from "@tanstack/react-query";

// Services
import { getStaysTodayActivity } from "../../services";

export const useTodayActivity = () => {
  const { isLoading, data: activities } = useQuery({
    queryFn: getStaysTodayActivity,
    queryKey: ["today-activity"],
  });

  return { activities, isLoading };
};
