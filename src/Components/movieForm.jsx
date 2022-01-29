import React, { Component } from "react";
import { ProgressBar } from "./progressBar";
import { getMovie } from "./../Services/movieService";
import { JsonToTable } from "react-json-to-table";
import { Link } from "react-router-dom";

class MovieForm extends Component {
  state = {
    movieDetails: {},
  };

  componentDidMount() {
    const movieId = this.props.match.params.id;
    getMovie(movieId)
      .catch((error) => console.log("There is an error" + error))
      .then((result) => {
        this.setState({ movieDetails: result.data });
      });
  }

  render() {
    const { movieDetails } = this.state;
    return (
      <div>
        <h2>The Details of {movieDetails.Title}</h2>
        <JsonToTable json={movieDetails} />
        <Link to="/">
          <button className="btn-primary">Back</button>
        </Link>
      </div>
    );
  }
}

export default MovieForm;
