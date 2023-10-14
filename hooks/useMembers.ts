import { useAPI } from '../contexts/useAPI';

const useAllMembers = () => {
  return useAPI().useQuery(['allMembersGet', null], {});
};

export default useAllMembers;
