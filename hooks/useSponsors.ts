import { useAPI } from '../contexts/useAPI';

const useSponsors = () => {
  return useAPI().useQuery(['sponsorsList', null]);
};

export default useSponsors;
