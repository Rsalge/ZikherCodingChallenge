import { combineReducers } from "redux";
import GetSongsReducer from "./GetSongsReducer";

const rootReducer = combineReducers({
  songs: GetSongsReducer
});

export default rootReducer;
