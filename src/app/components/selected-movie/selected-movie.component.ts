import { Component, Input } from '@angular/core';

import { Movie } from '../../models/movie';

@Component({
  selector: 'app-selected-movie',
  templateUrl: './selected-movie.component.html'
})
export class SelectedMovieComponent {
  @Input() movie: Movie;

  private moviePath = 'https://image.tmdb.org/t/p/w300';

  constructor() {}

}
