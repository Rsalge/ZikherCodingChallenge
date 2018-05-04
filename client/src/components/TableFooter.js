import React from "react";

const TableFooter = props => {
  return (
    <div className="tableFooters">
      {props.footers.map(footer => (
        <div className="tableFooter">{footer.title}</div>
      ))}
    </div>
  );
};

export default TableFooter;
