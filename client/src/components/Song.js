import React from "react";

const Song = props => {
  console.log("INSIDE SONG COMPONENT: ", props);
  return (
    <tr>
      <div>{props.song.name}</div>
    </tr>
  );
};

export default Song;
