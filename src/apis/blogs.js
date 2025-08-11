import Api from "./axiosConfig";

export const getAllBlogs = async () => {
  const response = await Api.get("/posts");
  return response.data;
};

export const getBlogDetailsBySlug = async (slug) => {
  // Using WordPress REST API endpoint format for posts by slug
  const response = await Api.get(`/posts?slug=${slug}`);
  // WordPress returns an array even for single post, get first item
  return response.data[0];
};
