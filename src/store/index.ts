import { configureStore } from "@reduxjs/toolkit";
import calendar from "./calendar";

export const store = configureStore({
  reducer: {
    calendar,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
