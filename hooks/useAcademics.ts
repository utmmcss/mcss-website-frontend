import { useAPI } from '../contexts/useAPI';

export const useAcademicCategories = () => {
  return useAPI().useQuery(['academicCategoriesList', null], {});
};

export const useAcademics = () => {
  return useAPI().useQuery(['academicsList', null], {});
};
