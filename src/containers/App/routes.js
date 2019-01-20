import React from "react";
import { Route, Switch } from "react-router";

import Landing from "containers/Landing";

const routes = (
  <Switch>
    <Route exact path="/" component={Landing} />
  </Switch>
);

export default routes;
