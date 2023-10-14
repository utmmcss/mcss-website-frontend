import { useAPI } from '../contexts/useAPI';

export const useAllPartnerCategories = () => {
  return useAPI().useQuery(['allPartnerCategoriesGet', null], {});
};

export const useAllPartners = () => {
  return useAPI().useQuery(['allPartnersGet', null], {});
};
