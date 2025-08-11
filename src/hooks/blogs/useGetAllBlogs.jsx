"use client";

import { getAllBlogs } from "@/apis/blogs";
import { useQuery } from "@tanstack/react-query";

// Custom hook with pagination & search
const useGetAllBlogs = () => {
  const query = useQuery({
    queryKey: ["all-Blogs"], // ✅ Track params for refetching
    queryFn: () => getAllBlogs(), // ✅ Pass params to fetch function
  });
  return query;
};

export default useGetAllBlogs;
