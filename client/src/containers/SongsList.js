import React, { Component } from "react";
import { connect } from "react-redux";
import Song from "../components/Song";

class SongsList extends Component {
  render() {
    const headers = [
      { title: "Title" },
      { title: "Artist" },
      { title: "Album" }
    ];
    console.log("SONGS RETURNED FROM API", this.props.songs);
    return (
      <div>
        <table>
          <thead>
            <tr> {headers.map(header => <th>{header.title}</th>)} </tr>
          </thead>
          <tbody>{this.props.songs.map(song => <Song song={song} />)}</tbody>
        </table>
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
