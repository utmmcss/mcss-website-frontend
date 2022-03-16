import { configureStore } from '@reduxjs/toolkit';
import eventSlice from './eventSlice';
import memberSlice from './memberSlice';
import blogSlice from './blogSlice';
import partnerSlice from './partnerSlice';
import academicSlice from './academicsSlice';

export const store = configureStore({
  reducer: {
    events: eventSlice,
    blogs: blogSlice,
    members: memberSlice,
    partners: partnerSlice,
    academics: academicSlice
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
