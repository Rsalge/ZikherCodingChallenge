import React, { Component } from "react";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      query: ""
    };
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search for a song"
          onChange={e => this.setState({ query: e.target.value })}
          value={this.state.query}
        />
      </div>
    );
  }
}

export default Search;
