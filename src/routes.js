import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import App from "./App";
import ShopScreen from "./containers/ShopScreen";
import TankScreen from "./containers/TankScreen";

const Routes = props =>
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={ShopScreen} />
      <Route path="/my-tank" component={TankScreen} />
    </Route>
  </Router>;

export default Routes;
