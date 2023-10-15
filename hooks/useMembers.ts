import { useAPI } from '../contexts/useAPI';

const useMembers = () => {
  return useAPI().useQuery(['membersList', null], {});
};

export default useMembers;
