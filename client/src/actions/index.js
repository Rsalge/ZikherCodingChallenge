import axios from "axios";
export const GET_SONGS = "fetch_songs";

export function fetchSongs(data) {
  let request = axios.get("/songs", { params: { data } });
  return {
    type: GET_SONGS,
    payload: request
  };
}
