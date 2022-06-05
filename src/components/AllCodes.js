import React, { Component } from "react";
import secToDatetime from "../misc/dateconverter";

export default class AllCodes extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(races) {
    this.props.handleChange(races);
  }

  fetchList = () => {
    fetch("https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=10")
      .then((response) => response.json())
      .then((r) => {
        console.log(r.data.race_summaries);
        this.handleChange(r.data.race_summaries);
      });
  };

  componentDidMount() {
    this.fetchList();
  }

  render() {
    let races = this.props.races["array"];
    return <p>{races[1][1]}</p>;

    // {/* <li key={this.props.races["array"][1][1].race_id}>
    //   {this.props.races["array"][1][1].race_id}
    // </li> */}
    // {/* <li key={this.props.races[0][1].race_id}>
    //   Meeting Name: {this.props.races[0][1].meeting_name}, Race Number:{" "}
    //   {this.props.races[0][1].race_number}, Start Datetime:{" "}
    //   {this.props.races[0][1].advertised_start.seconds}
    // </li> */}

    // {/*
    // {Object.entries(this.props.races).map((r) => (
    //   <li key={r[1].race_id}>
    //     Meeting Name: {r[1].meeting_name}, Race Number: {r[1].race_number},
    //     Start Datetime: {r[1].advertised_start.seconds}
    //   </li>
    // ))} */}
  }
}
