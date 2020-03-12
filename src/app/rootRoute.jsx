import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./routes/login.tsx";
import Home from "../app/routes/home.tsx";

class RootContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }}
      >
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/home" exact component={Home}></Route>
        </Switch>
      </div>
    );
  }
}
export default RootContainer;

