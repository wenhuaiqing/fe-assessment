import React, { Component } from "react";
import secToDatetime, { secToTimer } from "../misc/dateconverter";

export default class Greyhound extends Component {
  render() {
    let races = [];

    if (this.props.races["array"]) {
      races = this.props.races["array"].filter(
        (r) => r[1].category_id == "9daef0d7-bf3c-4f50-921d-8e818c60fe61"
      );
    }

    if (races) {
      return (
        <ol>
          {races.slice(0, 5).map((r) => (
            <li key={r[0]}>
              Meeting Name: {r[1].meeting_name}, Race Number: {r[1].race_number}
              , Start Datetime: {secToDatetime(r[1].advertised_start.seconds)},{" "}
              <i className="fa-solid fa-hourglass"></i>{" "}
              {secToTimer(r[1].advertised_start.seconds)},
            </li>
          ))}
        </ol>
      );
    }
    return <div>No greyhound race at this time, please try later</div>;
  }
}
