import React, { Component } from "react";
import SongsList from "../containers/SongsList";
import { Link } from "react-router-dom";
class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        This is the Homepage
        <Link to="/search">Search </Link>
      </div>
    );
  }
}

export default Homepage;
