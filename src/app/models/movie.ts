import * as config from '../config';

export class Movie {
  id = null;
  title = null;
  posterImage = null;
  overview = null;
  releaseDate = null;

  constructor(movie) {
    this.id = movie.id;
    this.title = movie.title;
    this.posterImage = movie.poster_path ? config.image.posterUrl + movie.poster_path : 'http://www.germandrive.com/wp-content/uploads/2017/05/placeholder.gif';
    this.overview = movie.overview;
    this.releaseDate = movie.release_date;
  }
}