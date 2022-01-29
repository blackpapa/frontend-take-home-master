import React, { Component } from "react";
import { getMovie } from "./../Services/movieService";
import { JsonToTable } from "react-json-to-table";
import { Link } from "react-router-dom";
import ProgressBar from "./progressBar";

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
        {!movieDetails ? (
          <ProgressBar />
        ) : (
          <div className="row">
            <div className="col"></div>
            <div className="col-10">
              <h2>The Details of {movieDetails.Title}</h2>
              <JsonToTable json={movieDetails} />
              <Link to="/">
                <button
                  style={{ marginLeft: 100, marginTop: 10 }}
                  className="btn-primary"
                >
                  Back
                </button>
              </Link>
            </div>
            <div className="col"></div>
          </div>
        )}
      </div>
    );
  }
}

export default MovieForm;
