import axios from "axios";
export const GET_SONGS = "fetch_songs";
export const SORT_SONGS = "sort_songs";

export function fetchSongs(query) {
  let request = axios.get("/api/songs", { params: { query } });
  return {
    type: GET_SONGS,
    payload: request
  };
}

export function sortSongs(field) {
  return {
    type: SORT_SONGS,
    payload: field
  };
}
