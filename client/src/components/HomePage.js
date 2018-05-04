import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import TokenDirections from "./TokenDirections";
class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    axios.post("/api/token", { token: this.state.token });
  }
  render() {
    return (
      <div className="homepage">
        <form className="token" onSubmit={this.handleSubmit}>
          <input
            onChange={e => this.setState({ token: e.target.value })}
            placeholder="Enter Spotify Access Token Here"
            value={this.state.token}
          />
          <button type="submit">Submit</button>
        </form>
        <TokenDirections />
      </div>
    );
  }
}

export default Homepage;
