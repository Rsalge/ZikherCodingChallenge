import React, { Component } from "react";
import { connect } from "react-redux";
import TableRow from "./TableRow";
class TableBody extends Component {
  render() {
    if (this.props.songs.data.length === 0) {
      return (
        <div className="message">
          Search for a song above and your results will be displayed here!
        </div>
      );
    }
    return (
      <div className="tableBody">
        {this.props.songs.data.map(song => {
          return <TableRow song={song} />;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    songs: state.songs
  };
}
export default connect(mapStateToProps)(TableBody);
