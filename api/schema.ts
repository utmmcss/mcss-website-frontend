import { DataAttributes } from '../types';
import { APIResponseEvent } from '../types/Events';
import { MemberResponse } from '../types/Members';

import { CustomFetch } from './useFetch';

const events = (customFetch: CustomFetch) =>
  ({
    eventsList: async () => {
      const res = await customFetch('CMS', 'events?populate=*');
      return res.data as APIResponseEvent;
    },
  } as const);

const members = (customFetch: CustomFetch) => ({
  membersList: async () => {
    const res = await customFetch('CMS', 'team-members?populate=*');
    return res.data as DataAttributes<MemberResponse>;
  },
});

const config = (customFetch: CustomFetch) =>
  ({
    ...events(customFetch),
    ...members(customFetch),
  } as const);

export default config;
