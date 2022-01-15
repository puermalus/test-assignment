import { combineReducers } from "redux";
import validateReducer from "./validate/validate.reducer";
import documentReducer from "./documents/documents.reducer";
import layoutReducer from "./layouts/layouts.reducer";

export default combineReducers({
  document: documentReducer,
  layout: layoutReducer,
  validate: validateReducer
})