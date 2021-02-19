import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/HomeContainer";
import Detail from "./containers/DetailContainer";
import Genre from "./containers/GenreContainer";
import My from "./containers/MyContainer";
import NotFound from "./containers/NotFound";

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
