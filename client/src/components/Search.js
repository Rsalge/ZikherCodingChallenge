import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSongs } from "../actions";
import SongsList from "../containers/SongsList";
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Search for a song"
            onChange={e => this.setState({ query: e.target.value })}
            value={this.state.query}
          />
          <button>Search</button>
        </form>
        <SongsList />
      </div>
    );
  }
}

export default connect(null, { fetchSongs })(Search);
