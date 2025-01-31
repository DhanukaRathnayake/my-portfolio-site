import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

// Services
import { blogsApi } from "./services/blogsApi";
import { contactMeApi } from "./services/contactMeApi";

export const makeStore = () =>
  configureStore({
    reducer: {
      [blogsApi.reducerPath]: blogsApi.reducer,
      [contactMeApi.reducerPath]: contactMeApi.reducer,
    },
    devTools: false,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: true,
      })
        .concat([blogsApi.middleware])
        .concat(contactMeApi.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper(makeStore, { debug: false });
