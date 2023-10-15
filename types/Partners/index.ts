import { DataAttribute, DataAttributes } from '../index';

export interface Partner {
  title: string;
  updatedDatetime: string;
  coverImageUrl: string;
  content: string;
  categories: string[];
  featured: boolean;
  description: string;
  partnerUrl: string;
}

interface PartnerResponse extends Omit<Partner, 'categories'> {
  updatedAt: string;
  categories: DataAttributes<{ type: string }>;
  cover_image: DataAttribute<{ url: string }>;
  partner_url: string;
}

export interface APIResponsePartner {
  data: {
    id: number;
    attributes: PartnerResponse;
  }[];
}
