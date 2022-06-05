import React, { Component } from "react";

export default class Horse extends Component {
  render() {
    return <h2>Category: {this.props.title}</h2>;
  }
}
