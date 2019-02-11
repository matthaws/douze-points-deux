import React from "react";
import { Switch, Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "util/routeUtil";

import Scoresheet from "containers/Scoresheet";
import Landing from "containers/Landing";

export default (
  <Switch>
    <ProtectedRoute path="/scoresheet/:year" component={Scoresheet} />
    <AuthRoute exact path="/" component={Landing} />
    <Route path="/test" render={() => <h1>Test!</h1>} />
  </Switch>
);
