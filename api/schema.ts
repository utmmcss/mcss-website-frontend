import { CategoryResponse, DataAttributes } from '../types';
import { APIResponseBlog } from '../types/Blogs';
import { APIResponseEvent } from '../types/Events';
import { MemberResponse } from '../types/Members';
import { APIResponseSponsor } from '../types/Sponsors';

import { CustomFetch } from './useFetch';

const blogs = (customFetch: CustomFetch) =>
  ({
    blogsList: async () => {
      const res = await customFetch('CMS', 'blogs?populate=*');
      return res.data as APIResponseBlog;
    },
  } as const);

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

const sponsors = (customFetch: CustomFetch) =>
  ({
    sponsorsList: async () => {
      const res = await customFetch('CMS', 'sponsors?populate=*');
      return res.data as APIResponseSponsor;
    },
  } as const);

const config = (customFetch: CustomFetch) =>
  ({
    ...blogs(customFetch),
    ...events(customFetch),
    ...members(customFetch),
    ...sponsors(customFetch),
  } as const);

export default config;
