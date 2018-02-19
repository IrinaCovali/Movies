import { Component, OnInit, Input } from '@angular/core';

import { Movie } from '../../models/movie';
import * as config from '../../config';

@Component({
  selector: 'found-movie-item',
  templateUrl: './found-movie.component.html',
  styleUrls: ['./found-movie.component.scss']
})
export class FoundMovieComponent implements OnInit {
  @Input() movie: Movie;

  imageSrc: string;
  poster: boolean;
  moviePath: string = config.image.thumbnailUrl;

  constructor() { }

  ngOnInit() {
    this.poster = this.movie.poster_path ? true : false;
    this.imageSrc = this.moviePath + this.movie.poster_path;
  }

  get title() {
    return this.movie.title
  }

}
