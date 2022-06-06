import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Greyhound from "./components/Greyhound";
import Harness from "./components/Harness";
import AllCodes from "./components/AllCodes";
import Horse from "./components/Horse";
import ArrayList from "./misc/bubbleSort";
import fetchList from "./misc/fetchList";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { races: [] };
  }

  handleChange(races) {
    let list = new ArrayList();
    Object.entries(races).forEach((r) => list.insert(r));
    list.bubbleSort();
    this.setState({ races: list });
    console.log(this.state.races);
    this.updateRaces();
    console.log(this.state.races);
  }

  updateRaces() {
    console.log(this.state.races);
    const currentDateTime = new Date();
    const currentSeconds = currentDateTime.getTime() / 1000;
    console.log(currentSeconds);
    console.log(this.state.races["array"]);
    // if (this.state.races["array"].length == 0) return 0;
    this.state.races["array"].forEach((race, index) => {
      if (race[1].advertised_start.seconds < currentDateTime.getTime() / 1000) {
        console.log(
          race[1].advertised_start.seconds < currentDateTime.getTime() / 1000
        );
        this.state.races["array"].splice(index, 1);
      }
    });
    this.setState({ races: this.state.races });

    if (this.state.races["array"].length <= 5) {
      fetch("https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=10")
        .then((response) => response.json())
        .then((r) => {
          console.log(r.data.race_summaries);
          this.handleChange(r.data.race_summaries);
        });
    }
    setTimeout(this.updateRaces.bind(this), 1000);
  }

  render() {
    console.log(this.state.races);
    return (
      <Router>
        <div className="container">
          <div className="row">
            <h1 className="mt-3">NEXT RACES</h1>
            <hr className="mb-3"></hr>
          </div>
          <div className="row">
            <div className="col-md-2">
              <nav>
                <ul className="list-group">
                  <li className="list-group-item">
                    <Link to="/AllCodes">All Codes</Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/Horse">Horse</Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/Harness">Harness</Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/Greyhound">Greyhound</Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="col-md-10">
              <Switch>
                <Route path="/AllCodes">
                  <AllCodes
                    races={this.state.races}
                    handleChange={this.handleChange}
                  />
                </Route>
                <Route path="/Horse">
                  <Horse races={this.state.races} />
                </Route>
                <Route exact path="/Harness">
                  <Harness races={this.state.races} />
                </Route>
                <Route exact path="/Greyhound">
                  <Greyhound races={this.state.races} />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
