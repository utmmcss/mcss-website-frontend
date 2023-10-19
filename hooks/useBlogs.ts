import { useAPI } from '../contexts/useAPI';

export const useBlogCategories = () => {
  return useAPI().useQuery(['blogCategoriesList', null]);
};

export const useBlogs = () => {
  return useAPI().useQuery(['blogsList', null]);
};
