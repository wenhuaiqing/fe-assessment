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

export default class App extends Component {
  render() {
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
                  <AllCodes />
                </Route>
                <Route path="/Horse">
                  <Horse />
                </Route>
                <Route exact path="/Harness">
                  <Harness />
                </Route>
                <Route exact path="/Greyhound">
                  <Greyhound />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
