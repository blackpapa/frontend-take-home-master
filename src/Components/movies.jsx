import React, { Component } from "react";

class Movies extends Component {
  state = {
    movies: [
      {
        Title: "Gur ka student",
        Year: "2015",
        imdbID: "tt9126042",
        Type: "movie",
        Poster: "N/A",
      },
    ],
    columns: [{ path: "Title" }, { path: "Poster" }, { path: "Year" }],
  };

  render() {
    return (
      <table className="table">
        <thead></thead>
        <tbody></tbody>
      </table>
    );
  }
}

export default Movies;
