import React, { Component } from "react";
import MoviesTable from "./moviesTable";
import http from "../Services/httpService";
import { Link } from "react-router-dom";

const apiEndPoint = "http://www.omdbapi.com/?apikey=320f6ab2&";

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
      {
        path: "title",
        label: "Title",
        content: (movie) => (
          <Link
            to={`/movies/${movie._imdbID}`}
            style={{ textDecoration: "none" }}
          >
            {movie.Title}
          </Link>
        ),
      },
      { path: "poster", label: "Poster" },
      { path: "year", label: "Year" },
    ],
    searchQuery: {
      title: "",
      year: "",
    },
    error: "",
  };

  fetchMovies = (searchParams = "s=king") => {
    http
      .get(`${apiEndPoint}${searchParams}`)
      .catch((error) => console.log("There is a error" + error))
      .then((result) => {
        if (result.data.Response === "True") {
          this.setState({
            movies: result.data.Search,
          });
        } else {
          console.log(result.data.Error);
          this.setState({ error: result.data.Error });
        }
      });
  };

  componentDidMount() {
    this.fetchMovies();
  }

  handleChange = (e) => {
    const { searchQuery } = this.state;
    searchQuery[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ searchQuery });
  };

  handleSearch = () => {
    this.setState({ error: "" });
    const { title, year } = this.state.searchQuery;

    this.fetchMovies(`s=${title}&y=${year}`);
  };

  render() {
    const { movies, columns, searchQuery, error } = this.state;

    return (
      <React.Fragment>
        <div className="row">
          <div className="col"></div>
          <div className="col-6" style={{ margin: 10, alignItems: "center" }}>
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
            <button
              className="btn btn-sm btn-primary"
              onClick={this.handleSearch}
            >
              Search
            </button>
          </div>
          <div className="col-2"></div>
        </div>

        <div className="row">
          <div className="col"></div>
          <div className="col">
            {error ? error : <MoviesTable movies={movies} columns={columns} />}
          </div>
          <div className="col"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
