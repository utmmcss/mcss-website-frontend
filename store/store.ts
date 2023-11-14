import { configureStore } from '@reduxjs/toolkit';

import blogSlice from './blogSlice';
import eventSlice from './eventSlice';
import memberSlice from './memberSlice';

export const store = configureStore({
  reducer: {
    events: eventSlice,
    blogs: blogSlice,
    members: memberSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
