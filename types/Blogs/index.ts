import { DataAttribute, DataAttributes } from '../index';

export interface Blog {
  title: string;
  creator: string;
  updatedDatetime: string;
  coverImageUrl: string;
  content: string;
  categories: string[];
  featured: boolean;
  description: string;
}

interface BlogResponse extends Omit<Blog, 'categories'> {
  updatedAt: string;
  categories: DataAttributes<{ type: string }>;
  cover_image: DataAttribute<{ url: string }>;
}

export interface APIResponseBlog {
  data: {
    id: number;
    attributes: BlogResponse;
  }[];
}
