import { configureStore } from '@reduxjs/toolkit';
import eventSlice from './eventSlice';

export const store = configureStore({
  reducer: {
    events: eventSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
