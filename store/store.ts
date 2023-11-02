import { configureStore } from '@reduxjs/toolkit';
import sponsorSlice from '@store/sponsorSlice';

import blogSlice from './blogSlice';
import eventSlice from './eventSlice';
import memberSlice from './memberSlice';

export const store = configureStore({
  reducer: {
    events: eventSlice,
    blogs: blogSlice,
    members: memberSlice,
    sponsors: sponsorSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
