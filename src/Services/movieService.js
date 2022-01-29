import http from "./httpService";

const apiEndPoint = "http://www.omdbapi.com/?apikey=320f6ab2&";

export function getMovie(movieId) {
  return http.get(`${apiEndPoint}i=${movieId}`);
}

export function mapToViewMovie(movie) {
  return {
    Title: movie.Title,
    Year: movie.Year,
    Rated: movie.Rated,
    Released: movie.Released,
    Runtime: movie.Runtime,
    Genre: movie.Genre,
    Director: movie.Director,
    Writer: movie.Writer,
    Actors: movie.Actors,
    Plot: movie.Plot,
    Language: movie.Language,
    Country: movie.Country,
    Awards: movie.Awards,
    Poster: movie.Poster,
    MetaScore: movie.MetaScore,
    imdbRating: movie.imdbRating,
    imdbVotes: movie.imdbVotes,
    imdbID: movie.imdbID,
    Type: movie.Type,
    DVD: movie.DVD,
    BoxOffice: movie.BoxOffice,
    Production: movie.Production,
    Website: movie.Website,
    Response: movie.Response,
  };
}
