import http from "./httpService";

const apiEndPoint = "http://www.omdbapi.com/?apikey=320f6ab2&";

export function getMovie(movieId) {
  return http.get(`${apiEndPoint}i=${movieId}`);
}
