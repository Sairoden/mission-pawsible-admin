// React & Libraries
import { useQuery } from "@tanstack/react-query";

// Services
import { getPetRecentPost } from "../../services";

export const usePetRecentPost = () => {
  const { data: petRecentPosts, isLoading } = useQuery({
    queryKey: ["recentPetPost"],
    queryFn: getPetRecentPost,
  });

  return { petRecentPosts, isLoading };
};
