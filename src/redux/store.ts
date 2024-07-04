import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { AppActions } from "./actions/AppActions";
import { RootReducer } from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";

export type AppState = ReturnType<typeof RootReducer>;

const store = createStore(
  RootReducer,
  composeWithDevTools(
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
  )
);

export default store;
