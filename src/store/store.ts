import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import commentSlice from "./comment/commentSlice";
import httpReqStatusSlice from "./http/httpReqStatusSlice";
import userSlice from "./user/userSlice";

export const store = configureStore({
  reducer: {
    comment: commentSlice,
    httpReqStatus: httpReqStatusSlice,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
