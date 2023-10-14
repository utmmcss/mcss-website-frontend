import { useAPI } from '../contexts/useAPI';

export const useAllAcademicCategories = () => {
  return useAPI().useQuery(['allAcademicCategoriesGet', null], {});
};

export const useAllAcademics = () => {
  return useAPI().useQuery(['allAcademicsGet', null], {});
};
