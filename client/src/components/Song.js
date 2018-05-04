import React from "react";

const Song = props => {
  return (
    <tr>
      <div>{props.song.name}</div>
    </tr>
  );
};

export default Song;
