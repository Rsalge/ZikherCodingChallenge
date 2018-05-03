import axios from "axios";
export const GET_SONGS = "fetch_songs";

export function fetchSongs(query) {
  let request = axios.get("/api/songs", { params: { query } });
  return {
    type: GET_SONGS,
    payload: request
  };
}
