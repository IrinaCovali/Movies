import { Component, OnInit, Input } from '@angular/core';

import { Movie } from '../../models/movie';

@Component({
  selector: 'found-movie-item',
  templateUrl: './found-movie.component.html'
})
export class FoundMovieComponent implements OnInit {
  @Input() movie: Movie;

  image: string;
  private moviePath = 'https://image.tmdb.org/t/p/w92';

  constructor() { }

  ngOnInit() {
    this.image = this.movie.poster_path ? this.moviePath + this.movie.poster_path : 'http://www.theemailcompany.com/wp-content/uploads/2016/02/no-image-placeholder-big-300x200.jpg';
  }

}
