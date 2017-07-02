import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import App from "./App";
import ShopScreen from "./containers/ShopScreen";

const Routes = props =>
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={ShopScreen} />
    </Route>
  </Router>;

export default Routes;
