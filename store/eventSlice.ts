/* eslint-disable @typescript-eslint/indent */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAPI } from '@utils/helper';
import type { RootState } from './store';

// Define a type for the slice state
interface Event {
  title: string;
  creator: string;
  start_datetime: string;
  end_datetime: string;
  cover_image_url: string;
  content: string;
  registration_url: string;
  categories: string[];
  location: string;
}
interface EventState {
  events: Event[];
}

export const getAllEvents = createAsyncThunk<
  Event[],
  /** no args for this async dispatch */
  void,
  {
    state: RootState;
  }
>('events/fetchAllEvents', async (_) => {
  interface EventResponse extends Event {
    cover_image: {
      formats: {
        medium: {
          url: string;
        };
      };
    }[];
  }

  const response: EventResponse[] = await getAPI('/events');
  const parsedEvents: Event[] = [];

  if (response) {
    response.forEach(
      ({
        title,
        creator,
        start_datetime,
        end_datetime,
        cover_image,
        content,
        registration_url,
        categories,
        location,
      }) =>
        parsedEvents.push({
          title,
          creator,
          start_datetime,
          end_datetime,
          cover_image_url: `${process.env.NEXT_PUBLIC_API_URL}${cover_image[0].formats.medium.url}`,
          content,
          registration_url,
          categories,
          location,
        }),
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
