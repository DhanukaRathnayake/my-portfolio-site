import { combineReducers } from "redux";

import userReducer from "./UserReducer";

export const RootReducer = combineReducers({
  user: userReducer,
});
