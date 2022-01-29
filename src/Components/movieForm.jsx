import React, { Component } from "react";
import { getMovie, mapToViewMovie } from "./../Services/movieService";

class MovieForm extends Component {
  state = {
    movieDetails: {
      Title: "",
      Year: "",
      Rated: "",
      Released: "",
      Runtime: "",
      Genre: "",
      Director: "",
      Writer: "",
      Actors: "",
      Plot: "",
      Language: "",
      Country: "",
      Awards: "",
      Poster: "",
      MetaScore: "",
      imdbRating: "",
      imdbVotes: "",
      imdbID: "",
      Type: "",
      DVD: "",
      BoxOffice: "",
      Production: "",
      Website: "",
      Response: "",
    },
  };

  componentDidMount() {
    const movieId = this.props.match.params.id;
    getMovie(movieId)
      .catch((error) => console.log("There is an error" + error))
      .then((result) => {
        this.setState({ movieDetails: mapToViewMovie(result.data) });
      });
  }

  render() {
    return <h1>{this.props.match.params.id}</h1>;
  }
}

export default MovieForm;
