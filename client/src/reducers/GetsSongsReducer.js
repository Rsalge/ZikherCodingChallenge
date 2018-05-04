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
      let title = action.payload.title;
      console.log("NEW STATE:", newState);
      if (title === "Title") {
        if (action.payload.sorted) {
          newState.data.reverse();
        } else {
          newState.data.sort(function(a, b) {
            var textA = a.name.toUpperCase();
            var textB = b.name.toUpperCase();
            return textA < textB ? -1 : textA > textB ? 1 : 0;
          });
        }
      } else if (title === "Artist") {
        if (action.payload.sorted) {
          newState.data.reverse();
        } else {
          newState.data.sort(function(a, b) {
            var textA = a.artists[0].name.toUpperCase();
            var textB = b.artists[0].name.toUpperCase();
            return textA < textB ? -1 : textA > textB ? 1 : 0;
          });
        }
      } else if (title === "Album") {
        if (action.payload.sorted) {
          newState.data.reverse();
        } else {
          newState.data.sort(function(a, b) {
            var textA = a.album.name.toUpperCase();
            var textB = b.album.name.toUpperCase();
            return textA < textB ? -1 : textA > textB ? 1 : 0;
          });
        }
      }
      return newState;
    default:
      return state;
  }
}
