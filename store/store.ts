import { configureStore } from '@reduxjs/toolkit';

import academicSlice from './academicsSlice';
import blogSlice from './blogSlice';
import eventSlice from './eventSlice';
import memberSlice from './memberSlice';
import partnerSlice from './partnerSlice';
import sponsorSlice from './sponsorSlice';

export const store = configureStore({
  reducer: {
    events: eventSlice,
    blogs: blogSlice,
    members: memberSlice,
    academics: academicSlice,
    sponsors: sponsorSlice,
    partners: partnerSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
