import React, { Component } from "react";
import axios from "axios";
import TokenDirections from "./TokenDirections";
class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      err: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    axios
      .post("/api/token", { token: this.state.token })
      .then(() => this.setState({ token: "", err: null }))
      .catch(err => this.setState(err));
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
        {this.state.err}
        <TokenDirections />
      </div>
    );
  }
}

export default Homepage;
