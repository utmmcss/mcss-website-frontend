import { useAPI } from '../contexts/useAPI';

export const useEventCategories = () => {
  return useAPI().useQuery(['eventCategoriesList', null]);
};

export const useEvents = () => {
  return useAPI().useQuery(['eventsList', null]);
};
