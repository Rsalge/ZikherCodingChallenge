import { GET_SONGS } from "../actions";

export default function(state = { error: null, data: [] }, action) {
  switch (action.type) {
    case GET_SONGS:
      console.log("SONGS DATA: ", action.payload);
      if (action.payload instanceof Error) {
        return {
          ...state,
          error: "Refresh token expired or does not exist, please refresh token"
        };
      }
      return { data: action.payload.data.tracks.items, error: null };
    default:
      return state;
  }
}
