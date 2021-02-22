import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import Genre from "./Pages/Genre";
import My from "./Pages/My";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/detail/:id" component={Detail} />
      <Route path="/genre" component={Genre} />
      <Route path="/my" component={My} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
