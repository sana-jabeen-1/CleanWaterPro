// Custom hook to fetch blog details by slug
import { getBlogDetailsBySlug } from "@/apis/blogs";
import { useQuery } from "@tanstack/react-query";

export const useBlogDetails = (slug) => {
  return useQuery({
    queryKey: ["blog", slug],
    queryFn: () => getBlogDetailsBySlug(slug),
    enabled: !!slug,
  });
};
