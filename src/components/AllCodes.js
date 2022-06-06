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
      });
  };

  componentDidMount() {
    this.handleChange(fetchList());
  }

  render() {
    let races = this.props.races["array"]
      ? this.props.races["array"] //.slice(0, 5)
      : this.props.races;
    console.log(races);
    if (this.props.races["array"]) {
      return (
        <ul>
          {races.map((r) => (
            <li key={r[0]}>
              Meeting Name: {r[1].meeting_name}, Race Number: {r[1].race_number}
              , Start Datetime: {secToDatetime(r[1].advertised_start.seconds)}
            </li>
          ))}
        </ul>
      );
    }
    return <div></div>;
  }
}
