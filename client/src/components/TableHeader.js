import React, { Component } from "react";
import { connect } from "react-redux";
import { sortSongs } from "../actions";
class TableHeaders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Artist: false,
      Title: false,
      Album: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(title) {
    this.props.sortSongs({ title, sorted: this.state[title] });
    if (title === "Title") {
      this.setState({
        Title: true,
        Artist: false,
        Album: false
      });
    } else if (title === "Artist") {
      this.setState({
        Title: false,
        Artist: true,
        Album: false
      });
    } else if (title === "Album") {
      this.setState({
        Title: false,
        Artist: false,
        Album: true
      });
    }
  }
  render() {
    return (
      <div className="tableHeaders">
        {this.props.headers.map(header => (
          <div
            key={Math.random()}
            className="tableHeader"
            onClick={() => this.handleClick(header.title)}
          >
            {header.title}
          </div>
        ))}
      </div>
    );
  }
}

export default connect(null, { sortSongs })(TableHeaders);
