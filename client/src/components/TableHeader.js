import React from "react";

const TableHeaders = props => {
  return (
    <div className="tableHeaders">
      {props.headers.map(header => (
        <div className="tableHeader">{header.title}</div>
      ))}
    </div>
  );
};

export default TableHeaders;
