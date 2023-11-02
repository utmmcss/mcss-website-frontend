import { useAPI } from '../contexts/useAPI';

export const useBlogs = () => {
  return useAPI().useQuery(['blogsList', null]);
};

export default useBlogs;
