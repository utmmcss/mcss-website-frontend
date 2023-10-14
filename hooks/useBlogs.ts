import { useAPI } from '../contexts/useAPI';

export const useAllBlogCategories = () => {
  return useAPI().useQuery(['allBlogCategoriesGet', null], {});
};

export const useAllBlogs = () => {
  return useAPI().useQuery(['allBlogsGet', null], {});
};
