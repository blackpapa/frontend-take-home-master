import React, { Component } from "react";

import axios from "axios";
import MoviesTable from "./moviesTable";

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
      {
        Title: "Gur Talk",
        Year: "2014–",
        imdbID: "tt3729852",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNTEzZDYwZWItODliMS00Y2FiLWFlYWYtYWFiZTM4MTk2OWJhXkEyXkFqcGdeQXVyMjI3MDczMjI@._V1_SX300.jpg",
      },
    ],
    columns: [
      { path: "title", label: "Title" },
      { path: "poster", label: "Poster" },
      { path: "year", label: "Year" },
    ],
    searchQuery: {
      title: "",
      year: "",
    },
  };

  componentDidMount() {
    axios
      .get("https://www.omdbapi.com/?apikey=320f6ab2&s=king&p=10")
      .then((response) =>
        this.setState({
          movies: response.data.Search,
        })
      )
      .catch((error) => console.log("There is a error" + error));
  }

  handleChange = (e) => {
    const { searchQuery } = this.state;
    searchQuery[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ searchQuery });
  };

  render() {
    const { movies, columns, searchQuery } = this.state;

    return (
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div style={{ margin: 10, alignItems: "center" }}>
            <label style={{ marginRight: 5 }}>Title</label>
            <input
              type="string"
              name="title"
              style={{ marginRight: 5 }}
              value={searchQuery.title}
              onChange={this.handleChange}
            />
            <label style={{ marginRight: 5 }}>Year</label>
            <input
              type="string"
              name="year"
              style={{ marginRight: 5 }}
              value={searchQuery.year}
              onChange={this.handleChange}
            />
            <button className="btn btn-sm btn-primary">Search</button>
          </div>
          <MoviesTable movies={movies} columns={columns} />
        </div>
        <div className="col"></div>
      </div>
    );
  }
}

export default Movies;
