import { useAPI } from '../contexts/useAPI';

export const usePartnerCategories = () => {
  return useAPI().useQuery(['partnerCategoriesList', null], {});
};

export const usePartners = () => {
  return useAPI().useQuery(['partnersList', null], {});
};
