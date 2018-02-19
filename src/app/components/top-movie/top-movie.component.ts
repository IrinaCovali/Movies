import { Component, Input } from '@angular/core';

import { Movie } from '../../models/movie';

@Component({
  selector: 'top-movie-item',
  templateUrl: './top-movie.component.html'
})
export class TopMovieComponent {
  @Input() movie: Movie;

  constructor() {}

  get title() {
    return this.movie.title
  }
}
