import React, { Component } from "react";
import { getMovie } from "./../Services/movieService";

class MovieForm extends Component {
  state = { movieDetails: {} };

  componentDidMount() {
    const movieId = this.props.match.params.id;
    getMovie(movieId)
      .catch((error) => console.log("There is an error" + error))
      .then((result) => {
        this.setState({ movieDetails: result.data });
      });
  }

  render() {
    console.log(this.state.movieDetails);
    return <h1>{this.props.match.params.id}</h1>;
  }
}

export default MovieForm;
