import { Component, Input } from '@angular/core';

@Component({
  selector: 'found-movie-item',
  templateUrl: './found-movie.component.html',
  styleUrls: ['./found-movie.component.scss']
})
export class FoundMovieComponent {
  @Input() movie;

  constructor() { }

  get title() {
    return this.movie.title
  }

  get poster() {
    return this.movie.posterImage
  }
}
