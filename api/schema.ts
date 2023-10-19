import { CategoryResponse, DataAttributes } from '../types';
import { APIResponseAcademic } from '../types/Academics';
import { APIResponseBlog } from '../types/Blogs';
import { APIResponseEvent } from '../types/Events';
import { MemberResponse } from '../types/Members';
import { APIResponsePartner } from '../types/Partners';

import { CustomFetch } from './useFetch';

const academics = (customFetch: CustomFetch) =>
  ({
    academicCategoriesList: async () => {
      const res = await customFetch('CMS', 'academic-categories');
      return res.data as DataAttributes<CategoryResponse>;
    },
    academicsList: async () => {
      const res = await customFetch('CMS', 'academics?populate=*');
      return res.data as APIResponseAcademic;
    },
  });

const blogs = (customFetch: CustomFetch) =>
  ({
    blogCategoriesList: async () => {
      const res = await customFetch('CMS', 'blog-categories');
      return res.data as DataAttributes<CategoryResponse>;
    },
    blogsList: async () => {
      const res = await customFetch('CMS', 'blogs?populate=*');
      return res.data as APIResponseBlog;
    },
  } as const);

const events = (customFetch: CustomFetch) =>
  ({
    eventCategoriesList: async () => {
      const res = await customFetch('CMS', 'event-categories');
      return res.data as DataAttributes<CategoryResponse>;
    },
    eventsList: async () => {
      const res = await customFetch('CMS', 'events?populate=*');
      return res.data as APIResponseEvent;
    },
  } as const);

const members = (customFetch: CustomFetch) =>
  ({
    membersList: async () => {
      const res = await customFetch('CMS', 'team-members?populate=*');
      return res.data as DataAttributes<MemberResponse>;
    },
  });

const partners = (customFetch: CustomFetch) =>
  ({
    partnerCategoriesList: async () => {
      const res = await customFetch('CMS', 'partner-categories');
      return res.data as DataAttributes<CategoryResponse>;
    },
    partnersList: async () => {
      const res = await customFetch('CMS', 'partners?populate=*');
      return res.data as APIResponsePartner;
    },
  });

const config = (customFetch: CustomFetch) =>
  ({
    ...academics(customFetch),
    ...blogs(customFetch),
    ...events(customFetch),
    ...members(customFetch),
    ...partners(customFetch),
  } as const);

export default config;
