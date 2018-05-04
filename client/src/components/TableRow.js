import React from "react";

const TableRow = props => {
  console.log(
    `song fields \nname:${props.song.name}\nartist:${
      props.song.artists[0].name
    }\nAlbum: ${props.song.album.name}`
  );
  const fields = ["name", "artists[0].name", "album.name"];
  return (
    <div className="tableRow">
      <div>{props.song.name}</div>
      <div>{props.song.artists[0].name}</div>
      <div>{props.song.album.name}</div>
      <img src={props.song.album.images[0].url} />
    </div>
  );
};

export default TableRow;
