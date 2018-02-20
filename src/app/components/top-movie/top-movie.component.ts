import { Component, Input } from '@angular/core';

@Component({
  selector: 'top-movie-item',
  templateUrl: './top-movie.component.html'
})
export class TopMovieComponent {
  @Input() movie;

  constructor() {}

  get title() {
    return this.movie.title
  }
}
