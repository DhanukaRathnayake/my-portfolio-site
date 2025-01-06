import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

// Services
import { blogsApi } from "./services/blogsApi";

const isDevelopment = process.env.NODE_ENV === "development";

export const makeStore = () =>
  configureStore({
    reducer: {
      [blogsApi.reducerPath]: blogsApi.reducer,
    },
    devTools: isDevelopment,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: isDevelopment ? false : true,
      }).concat([blogsApi.middleware]),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper(makeStore, { debug: isDevelopment });
