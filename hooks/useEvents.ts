import { useAPI } from '../contexts/useAPI';

export const useAllEventCategories = () => {
  return useAPI().useQuery(['allEventCategoriesGet', null], {});
};

export const useAllEvents = () => {
  return useAPI().useQuery(['allEventsGet', null], {});
};
