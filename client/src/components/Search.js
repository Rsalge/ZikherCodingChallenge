import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSongs } from "../actions";
import SongsTable from "../containers/SongsTable";
class Search extends Component {
  constructor() {
    super();
    this.state = {
      query: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.query);
    this.props.fetchSongs(this.state.query);
    this.setState({ query: "" });
  }

  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Search for a song"
            onChange={e => this.setState({ query: e.target.value })}
            value={this.state.query}
          />
          <button>Search</button>
        </form>
        <p className="error">{this.props.songs.error}</p>

        <SongsTable />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    songs: state.songs
  };
}

export default connect(mapStateToProps, { fetchSongs })(Search);
