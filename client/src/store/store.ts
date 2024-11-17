import { combineReducers } from "redux";
import { themeReducer } from "./reducers/themeReducer";
export const reducers = combineReducers({
  theme: themeReducer,
});
