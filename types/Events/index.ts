import { DataAttribute, DataAttributes } from '../index';

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

interface EventResponse extends Event {
  start_datetime: string;
  end_datetime: string;
  registration_url: string;
  categories: string[];
  cover_image: DataAttribute<{ url: string }>;
}

export interface APIResponseEvent {
  data: {
    id: number;
    attributes: EventResponse;
  }[];
}
