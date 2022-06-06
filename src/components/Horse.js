import React, { Component } from "react";
import secToDatetime, { secToTimer } from "../misc/dateconverter";

export default class Horse extends Component {
  render() {
    let races = [];

    if (this.props.races["array"]) {
      races = this.props.races["array"].filter(
        (r) => r[1].category_id == "4a2788f8-e825-4d36-9894-efd4baf1cfae"
      );
    }

    console.log(races);
    const currentDateTime = new Date();
    const currentSeconds = currentDateTime.getTime() / 1000;

    if (races) {
      return (
        <ol>
          {races.slice(0, 5).map((r) => (
            <li key={r[0]}>
              Meeting Name: {r[1].meeting_name}, Race Number: {r[1].race_number}
              , Start Datetime: {secToDatetime(r[1].advertised_start.seconds)},{" "}
              {secToTimer(
                Math.floor(r[1].advertised_start.seconds - currentSeconds)
              )}
              , {Math.floor(r[1].advertised_start.seconds - currentSeconds)}
            </li>
          ))}
        </ol>
      );
    }
    return <div>No horse race at this time, please try later</div>;
  }
}
