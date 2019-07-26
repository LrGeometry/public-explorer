import { combineReducers } from "redux";
import { AssetReducer } from "./Asset";

export const reducers = combineReducers({
  assets: AssetReducer
});
