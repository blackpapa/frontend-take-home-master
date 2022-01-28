import React, { Component } from "react";
import _ from "lodash";

class MoviesTable extends Component {
  render() {
    const { movies, columns } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            {columns.map((column) => (
              <td key={column.path}>{column.label}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.imdbID}>
              {columns.map((column) => (
                <td key={column.path}>{_.get(movie, column.label)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
