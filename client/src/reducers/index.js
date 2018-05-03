import { combineReducers } from "redux";
import GetsSongsReducer from "./GetsSongsReducer";

const rootReducer = combineReducers({
  songs: GetsSongsReducer
});

export default rootReducer;
