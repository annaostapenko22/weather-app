import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { mainReducer } from "./forecastReducers";
export const store = createStore(
  mainReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
