import { DataAttribute } from '../index';

export interface Member {
  name: string;
  role: string;
  avatarUrl: string;
  websiteUrl: string;
  executive: string;
}

export interface MemberResponse extends Member {
  avatar: DataAttribute<{
    url: string;
  }>;
  website_url: string;
}
