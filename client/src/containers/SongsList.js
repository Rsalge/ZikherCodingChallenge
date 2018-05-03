import React, { Component } from "react";
import { connect } from "react-redux";
import Song from "../components/Song";

class SongsList extends Component {
  render() {
    console.log("SONGS RETURNED FROM API", this.props.songs);
    return (
      <div>
        <h1>This is the SongList component</h1>
        {this.props.songs.map(song => <Song song={song} />)}
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
