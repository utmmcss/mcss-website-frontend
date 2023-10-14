export interface DataAttribute<T> {
  data: {
    attributes: T;
  };
}

export interface DataAttributes<T> {
  data: {
    attributes: T;
  }[];
}

export interface CategoryResponse {
  type: string;
}

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

export interface Event {
  title: string;
  creator: string;
  startDatetime: string;
  endDatetime: string;
  coverImageUrl: string;
  content: string;
  registrationUrl: string;
  categories: string[];
  location: string;
  featured: boolean;
}

interface EventResponse extends Omit<Event, 'categories'> {
  start_datetime: string;
  end_datetime: string;
  registration_url: string;
  categories: DataAttributes<{ type: string }>;
  cover_image: DataAttribute<{ url: string }>;
}

export interface APIResponseEvent {
  data: {
    id: number;
    attributes: EventResponse;
  }[];
}

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

interface APIResponsePartner {
  data: {
    id: number;
    attributes: PartnerResponse;
  }[];
}
