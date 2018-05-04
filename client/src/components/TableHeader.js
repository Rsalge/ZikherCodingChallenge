import React from "react";
import { connect } from "react-redux";
import { sortSongs } from "../actions";
const TableHeaders = props => {
  return (
    <div className="tableHeaders">
      {props.headers.map(header => (
        <div
          className="tableHeader"
          onClick={() => props.sortSongs(header.title)}
        >
          {header.title}
        </div>
      ))}
    </div>
  );
};

export default connect(null, { sortSongs })(TableHeaders);
