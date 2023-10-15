/* eslint-disable @typescript-eslint/indent */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { DataAttribute, DataAttributes } from '@store/storeTypes';
import { getAPI } from '@utils/helper';
import _ from 'underscore';

import type { RootState } from './store';

// Define a type for the slice state
interface Event {
  title: string;
  coverImageUrl: string;
  featured: boolean;
  startDatetime: string;
  endDatetime: string;
  location: string;
  content?: string;
  description?: string;
  tags:
    | {
        id: number;
        Tag: string;
      }[]
    | [];
}
interface EventState {
  events: Record<number, Event>;
}

export const getAllEvents = createAsyncThunk<
  Record<number, Event>,
  /** no args for this async dispatch */
  void,
  {
    state: RootState;
  }
>('events/fetchAllEvents', async () => {
  interface EventResponse extends Event {
    start: string;
    end: string;
    cover: DataAttribute<{ url: string }>;
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
          cover,
          featured,
          start: startDatetime,
          end: endDatetime,
          location,
          content,
          description,
          tags,
        },
      }) => {
        parsedEvents[id] = {
          title,
          coverImageUrl: `${process.env.NEXT_PUBLIC_API_URL}${cover.data.attributes.url}`,
          featured,
          startDatetime,
          endDatetime,
          location,
          content: content?.replaceAll('/uploads/', `${process.env.NEXT_PUBLIC_API_URL}/uploads/`),
          description,
          tags,
        };
      }
    );
  }
  return parsedEvents;
});

// Define the initial state using that type
const initialState: EventState = {
  events: [],
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
  },
});

export default eventSlice.reducer;
