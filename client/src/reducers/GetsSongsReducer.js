import { GET_SONGS, SORT_SONGS } from "../actions";

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
    case SORT_SONGS:
      let newState = Object.assign({}, state);
      console.log("NEW STATE:", newState);
      if (action.payload === "Title") {
        console.log("title clicked");
        if (action.payload.sorted) {
          console.log("already sorted");
        } else {
          newState.data.sort(function(a, b) {
            var textA = a.name.toUpperCase();
            var textB = b.name.toUpperCase();
            return textA < textB ? -1 : textA > textB ? 1 : 0;
          });
        }
      } else if (action.payload === "Artist") {
        console.log("artist clicked");
      } else if (action.payload === "Album") {
        console.log("album clicked");
      }
      return newState;
    default:
      return state;
  }
}
