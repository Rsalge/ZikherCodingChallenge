import React from "react";

const Song = props => {
  console.log("INSIDE SONG COMPONENT: ", props);
  return <div>{props.song.name}</div>;
};

export default Song;
