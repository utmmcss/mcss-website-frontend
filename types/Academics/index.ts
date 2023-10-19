import { DataAttribute, DataAttributes } from '../index';

export interface Academic {
  title: string;
  creator: string;
  updatedDatetime: string;
  coverImageUrl: string;
  content: string;
  categories: string[];
  featured: boolean;
  description: string;
}

interface AcademicResponse extends Omit<Academic, 'categories'> {
  updatedAt: string;
  categories: DataAttributes<{ type: string }>;
  cover_image: DataAttribute<{ url: string }>;
}

export interface APIResponseAcademic {
  data: {
    id: number;
    attributes: AcademicResponse;
  }[];
}
