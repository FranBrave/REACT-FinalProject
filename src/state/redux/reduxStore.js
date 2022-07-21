import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { searchReducer } from "./reducers/searchReducer";
import { travelReducer } from "./reducers/travelReducer";
import { userReducer } from "./reducers/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  travel: travelReducer,
  search: searchReducer,
});

export const store = configureStore(
  {
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }),
  },
  composeWithDevTools(applyMiddleware(thunk))
);
