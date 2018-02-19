import { Component, Input } from '@angular/core';

import { Movie } from '../../models/movie';
import * as config from '../../config';

@Component({
  selector: 'app-selected-movie',
  templateUrl: './selected-movie.component.html'
})
export class SelectedMovieComponent {
  @Input() movie: Movie;

  moviePath = config.image.posterUrl;

  constructor() {}

  get title() {
    return this.movie.title
  }

  get overview() {
    return this.movie.overview
  }

  get release_date() {
    return this.movie.release_date
  }

  get poster_path() {
    return this.movie.poster_path
  }

}
