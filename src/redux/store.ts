import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

// import sampleReducer from "./features/sampleSlice";

import { blogsApi } from "./services/blogsApi";

export const makeStore = () =>
  configureStore({
    reducer: {
      // sampleReducer,
      [blogsApi.reducerPath]: blogsApi.reducer,
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({}).concat([blogsApi.middleware]),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
