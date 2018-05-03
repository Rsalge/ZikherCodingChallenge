import { GET_SONGS } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case GET_SONGS:
      return action.payload.data;
    default:
      return state;
  }
}
