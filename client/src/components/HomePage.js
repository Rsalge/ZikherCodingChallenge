import React, { Component } from "react";
import SongsList from "../containers/SongsList";

class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        This is the Homepage
        <SongsList />
      </div>
    );
  }
}

export default Homepage;
