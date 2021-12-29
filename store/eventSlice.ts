/* eslint-disable @typescript-eslint/indent */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import _ from 'underscore';

import type { DataAttribute, DataAttributes } from '@store/storeTypes';
import { getAPI } from '@utils/helper';
import type { RootState } from './store';

// Define a type for the slice state
interface Event {
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
interface EventState {
  events: Record<number, Event>;
  categories: string[];
}

export const getAllEventCategories = createAsyncThunk<
  string[],
  /** no args for this async dispatch */
  void,
  {
    state: RootState;
  }
>('events/fetchAllCategories', async () => {
  interface CategoryResponse {
    type: string;
  }

  const response: DataAttributes<CategoryResponse> = await getAPI('/event-categories');
  let parsedCategories: string[] = [];

  if (response?.data) {
    parsedCategories = response.data.map(({ attributes }) => attributes.type);
  }

  return parsedCategories;
});

export const getAllEvents = createAsyncThunk<
  Record<number, Event>,
  /** no args for this async dispatch */
  void,
  {
    state: RootState;
  }
>('events/fetchAllEvents', async () => {
  interface EventResponse extends Omit<Event, 'categories'> {
    start_datetime: string;
    end_datetime: string;
    registration_url: string;
    categories: DataAttributes<{ type: string }>;
    cover_image: DataAttribute<{ url: string }>;
  }

  interface APIResponse {
    data: {
      id: number;
      attributes: EventResponse;
    }[];
  }

  const response: APIResponse = await getAPI('/events?populate=*');
  const parsedEvents: Record<number, Event> = {};

  if (response?.data) {
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
        const parsedCategories = !_.isEmpty(categories)
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
      },
    );
  }
  return parsedEvents;
});

// Define the initial state using that type
const initialState: EventState = {
  events: [],
  categories: [],
};

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // load all events
    builder.addCase(getAllEvents.fulfilled, (state, action) => {
      state.events = action.payload;
    });

    // load all event categories
    builder.addCase(getAllEventCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export default eventSlice.reducer;
