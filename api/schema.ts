import _ from 'underscore';

import {
  Academic, APIResponseAcademic, APIResponseBlog, APIResponseEvent,
  APIResponsePartner, Blog, CategoryResponse,
  DataAttributes, Event, Member, MemberResponse, Partner
} from './schemaTypes';
import { CustomFetch } from './useFetch';

const academics = (customFetch: CustomFetch) =>
  ({
    allAcademicCategoriesGet: async () => {
      const res = await customFetch('CMS', 'academic-categories');
      const parsedCategories = (res.data as DataAttributes<CategoryResponse>)
        .data.map(({ attributes }) => attributes.type);
      return parsedCategories;
    },
    allAcademicsGet: async () => {
      const res = await customFetch('CMS', 'academics?populate=*');
      const response: APIResponseAcademic = res.data;
      const parsedAcademics: Record<number, Academic> = {};

      response.data.forEach(
        ({
          id,
          attributes: {
            title,
            creator,
            cover_image,
            content,
            categories,
            featured,
            updatedAt,
            description
          },
        }) => {
          const parsedCategories = !_.isEmpty(categories.data)
            ? categories.data.map(({ attributes }) => attributes.type)
            : ['Other'];

          parsedAcademics[id] = {
            title,
            creator,
            coverImageUrl: `${process.env.NEXT_PUBLIC_API_URL}${cover_image.data.attributes.url}`,
            content: content.replaceAll('/uploads/', `${process.env.NEXT_PUBLIC_API_URL}/uploads/`),
            categories: parsedCategories,
            featured,
            updatedDatetime: updatedAt,
            description,
          };
        }
      );
      return parsedAcademics;
    },
  });

const blogs = (customFetch: CustomFetch) =>
  ({
    allBlogCategoriesGet: async () => {
      const res = await customFetch('CMS', 'blog-categories');
      const parsedCategories = (res.data as DataAttributes<CategoryResponse>)
        .data.map(({ attributes }) => attributes.type);
      return parsedCategories;
    },
    allBlogsGet: async () => {
      const res = await customFetch('CMS', 'blogs?populate=*');
      const response: APIResponseBlog = res.data;
      const parsedBlogs: Record<number, Blog> = {};

      response.data.forEach(
        ({
          id,
          attributes: {
            title,
            creator,
            cover_image,
            content,
            categories,
            featured,
            updatedAt,
            description,
          }
        }) => {
          const parsedCategories = !_.isEmpty(categories.data)
            ? categories.data.map(({ attributes }) => attributes.type)
            : ['Other'];

          parsedBlogs[id] = {
            title,
            creator,
            coverImageUrl: `${process.env.NEXT_PUBLIC_API_URL}${cover_image.data.attributes.url}`,
            content: content.replaceAll('/uploads', `${process.env.NEXT_PUBLIC_API_URL}/uploads/`),
            categories: parsedCategories,
            featured,
            updatedDatetime: updatedAt,
            description,
          };
        }
      );
      return parsedBlogs;
    },
  } as const);

const events = (customFetch: CustomFetch) =>
  ({
    allEventCategoriesGet: async () => {
      const res = await customFetch('CMS', 'event-categories');
      const parsedCategories = (res.data as DataAttributes<CategoryResponse>)
        .data.map(({ attributes }) => attributes.type);
      return parsedCategories;
    },
    allEventsGet: async () => {
      const res = await customFetch('CMS', 'events?populate=*');
      const response: APIResponseEvent = res.data;
      const parsedEvents: Record<number, Event> = {};

      response.data.forEach(
        ({
          id,
          attributes: {
            title,
            creator,
            start_datetime: startDatetime,
            end_datetime: endDatetime,
            cover_image,
            content,
            registration_url: registrationUrl,
            categories,
            location,
            featured,
          },
        }) => {
          const parsedCategories = !_.isEmpty(categories.data)
            ? categories.data.map(({ attributes: { type } }) => type)
            : ['Other'];

          parsedEvents[id] = {
            title,
            creator,
            startDatetime,
            endDatetime,
            coverImageUrl: `${process.env.NEXT_PUBLIC_API_URL}${cover_image.data.attributes.url}`,
            content: content.replaceAll('/uploads/', `${process.env.NEXT_PUBLIC_API_URL}/uploads/`),
            registrationUrl,
            categories: parsedCategories,
            location,
            featured,
          };
        }
      );
      return parsedEvents;
    },
  } as const);

const members = (customFetch: CustomFetch) =>
  ({
    allMembersGet: async () => {
      const res = await customFetch('CMS', 'team-members?populate=*');
      const response: DataAttributes<MemberResponse> = res.data;
      const parsedMembers: Member[] = [];

      response.data.forEach(({ attributes: { name, role, avatar, website_url, executive } }) =>
        parsedMembers.push({
          role,
          name,
          avatarUrl: `${process.env.NEXT_PUBLIC_API_URL}${avatar.data.attributes.url}`,
          websiteUrl: website_url,
          executive,
        })
      );
      return parsedMembers;
    },
  });

const partners = (customFetch: CustomFetch) =>
  ({
    allPartnerCategoriesGet: async () => {
      const res = await customFetch('CMS', 'partner-categories');
      const parsedCategories = (res.data as DataAttributes<CategoryResponse>)
        .data.map(({ attributes }) => attributes.type);
      return parsedCategories;
    },
    allPartnersGet: async () => {
      const res = await customFetch('CMS', 'partners?populate=*');
      const response: APIResponsePartner = res.data;
      const parsedPartners: Record<number, Partner> = {};

      response.data.forEach(
        ({
          id,
          attributes: {
            title,
            cover_image,
            content,
            categories,
            featured,
            updatedAt,
            description,
            partner_url: partnerUrl,
          },
        }) => {
          const parsedCategories = !_.isEmpty(categories.data)
            ? categories.data.map(({ attributes: { type } }) => type)
            : ['Other'];

          parsedPartners[id] = {
            title,
            coverImageUrl: `${process.env.NEXT_PUBLIC_API_URL}${cover_image.data.attributes.url}`,
            content: content.replaceAll('/uploads/', `${process.env.NEXT_PUBLIC_API_URL}/uploads/`),
            categories: parsedCategories,
            featured,
            updatedDatetime: updatedAt,
            description,
            partnerUrl,
          };
        }
      );
      return parsedPartners;
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
