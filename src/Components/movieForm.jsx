import React, { Component } from "react";
import { getMovie, mapToViewMovie } from "./../Services/movieService";
import { JsonToTable } from "react-json-to-table";

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
      </div>
    );
  }
}

export default MovieForm;
