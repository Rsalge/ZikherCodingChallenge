import React, { Component } from "react";
import { connect } from "react-redux";

class SongsList extends Component {
  render() {
    console.log("SONGS RETURNED FROM API", this.props.songs);
    return <div>This is the SongList component</div>;
  }
}

function mapStateToProps(state) {
  return {
    songs: state.songs
  };
}

export default connect(mapStateToProps)(SongsList);
