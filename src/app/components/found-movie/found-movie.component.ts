import { Component, Input } from '@angular/core';

import { Movie } from '../../models/movie';

@Component({
  selector: 'found-movie-item',
  templateUrl: './found-movie.component.html'
})
export class FoundMovieComponent {
  @Input() movie: Movie;

  constructor() {}

}
