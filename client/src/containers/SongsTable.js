import React, { Component } from "react";
import { connect } from "react-redux";
import TableHeader from "../components/TableHeader";
import TableBody from "../components/TableBody";

class Table extends Component {
  render() {
    const headers = [
      { title: "Title" },
      { title: "Artist" },
      { title: "Album" }
    ];
    return (
      <div className="table">
        <TableHeader headers={headers} />
        <TableBody />
        <TableHeader headers={headers} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    songs: state.songs
  };
}
export default connect(mapStateToProps)(Table);
