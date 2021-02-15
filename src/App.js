import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/HomeContainer";
import Detail from "./containers/DetailContainer";
import NotFound from "./containers/NotFound";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/detail" component={Detail} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
