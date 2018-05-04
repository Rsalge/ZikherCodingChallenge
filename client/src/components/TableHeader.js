import React, { Component } from "react";
import { connect } from "react-redux";
import { sortSongs } from "../actions";
class TableHeaders extends Component {
  render() {
    return (
      <div className="tableHeaders">
        {this.props.headers.map(header => (
          <div
            className="tableHeader"
            onClick={() => this.props.sortSongs(header.title)}
          >
            {header.title}
          </div>
        ))}
      </div>
    );
  }
}

export default connect(null, { sortSongs })(TableHeaders);
