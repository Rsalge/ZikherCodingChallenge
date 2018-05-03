import React, { Component } from "react";
import { connect } from "react-redux";
import Song from "../components/Song";
import Table from "./Table";

class SongsList extends Component {
  render() {
    console.log("SONGS RETURNED FROM API", this.props.songs);
    return (
      <div className="songList">
        <Table />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    songs: state.songs
  };
}

export default connect(mapStateToProps)(SongsList);
