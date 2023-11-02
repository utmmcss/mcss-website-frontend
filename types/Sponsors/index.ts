import { DataAttribute, DataAttributes } from '../index';

export interface Sponsor {
  title: string;
  updatedDatetime: string;
  coverImageUrl: string;
  content: string;
  featured: boolean;
  description: string;
  sponsorUrl: string;
}

interface SponsorResponse extends Sponsor {
  updatedAt: string;
  cover_image: DataAttribute<{ url: string }>;
  sponsor_url: string;
}

export interface APIResponseSponsor {
  data: {
    id: number;
    attributes: SponsorResponse;
  }[];
}
