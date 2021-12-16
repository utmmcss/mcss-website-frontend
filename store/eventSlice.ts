/* eslint-disable @typescript-eslint/indent */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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
  interface EventResponse extends Omit<Event, 'categories'> {
    start_datetime: string;
    end_datetime: string;
    cover_image_url: string;
    registration_url: string;
    categories: {
      type: string;
    }[];
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
        start_datetime: startDatetime,
        end_datetime: endDatetime,
        cover_image,
        content,
        registration_url: registrationUrl,
        categories,
        location,
        featured,
      }) => {
        const parsedCategories = categories.map(({ type }) => type);

        return parsedEvents.push({
          title,
          creator,
          startDatetime,
          endDatetime,
          coverImageUrl: `${process.env.NEXT_PUBLIC_API_URL}${cover_image[0].formats.medium.url}`,
          content,
          registrationUrl,
          categories: parsedCategories,
          location,
          featured,
        });
      },
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
