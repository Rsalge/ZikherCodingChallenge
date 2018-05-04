import React from "react";

const TableRow = props => {
  return (
    <div className="tableRow">
      <div className="field">{props.song.name}</div>
      <div className="field">{props.song.artists[0].name}</div>
      <div className="field">
        <div>{props.song.album.name}</div>
        <img src={props.song.album.images[0].url} alt="album artwork" />
      </div>
    </div>
  );
};

export default TableRow;
