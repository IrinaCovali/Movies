import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-selected-movie',
  templateUrl: './selected-movie.component.html'
})
export class SelectedMovieComponent {
  @Input() movie;

  constructor() {}

  get title() {
    return this.movie.title
  }

  get overview() {
    return this.movie.overview
  }

  get release() {
    return this.movie.releaseDate
  }
  
  get poster() {
    return this.movie.posterImage
  }

}
