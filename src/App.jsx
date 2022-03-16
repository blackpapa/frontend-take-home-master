import React from "react";
import Movies from "./Components/movies";
import MovieForm from "./Components/movieForm";
import NotFound from "./Components/notFound";

import { Switch, Route, Redirect } from "react-router-dom";

export default function App() {
  return (
    <div>
      <main className="container">
        <Switch>
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </div>
  );
}

//darwerfefsdfwerd
