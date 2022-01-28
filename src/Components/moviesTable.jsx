import React, { Component } from "react";
import _ from "lodash";

class MoviesTable extends Component {
  renderCell = (item, column) => {
    //Return link to the details of movies
    if (column.content) return column.content(item);

    //render image
    if (column.path === "poster") {
      const result = _.get(item, column.label);
      return result === "N/A" ? result : <img src={result} height={100} />;
    }

    return _.get(item, column.label);
  };

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
                <td key={column.path}>{this.renderCell(movie, column)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
