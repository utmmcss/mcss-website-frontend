import { useAPI } from '../contexts/useAPI';

export const useEvents = () => {
  return useAPI().useQuery(['eventsList', null]);
};

export default useEvents;
