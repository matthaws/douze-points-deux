import React from "react";
import { Switch } from "react-router";
import { AuthRoute, ProtectedRoute } from "util/routeUtil";

import Scoresheet from "containers/Scoresheet";
import Landing from "containers/Landing";

export default (
  <Switch>
    <ProtectedRoute path="/scoresheet/:year" component={Scoresheet} />
    <AuthRoute exact path="/" component={Landing} />
  </Switch>
);
