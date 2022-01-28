import React from "react";
import Movies from "./Components/movies";
import NotFound from "./Components/notFound";
import { Switch, Route, Redirect } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/not-found" component={NotFound} />
        <Route exact path="/" component={Movies} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
}
