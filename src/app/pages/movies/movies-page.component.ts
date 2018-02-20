import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';

import * as MoviesActions from '../../store/movies/actions';
import * as fromMovies from '../../store/movies/reducers';
import * as fromStore from '../../store';

import * as config from '../../config';
import { Movie } from '../../models/movie';

import { MoviesService } from '../../store/movies/service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss']
})
export class MoviesPageComponent implements OnInit {
  // private moviePath = config.image.posterUrl;

  moviesState: Observable<fromMovies.State>;
  // topRated: Movie[];

  constructor(private store: Store<fromStore.AppState>, private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesState = this.store.select(fromStore.selectFeature);
    // this.store.select(fromStore.selectFeature).subscribe(data => {
    //   if(data.movies) {
    //     this.topRated = data.movies.map(movie => new Movie(movie));
    //   }
    // });
    this.store.dispatch(new MoviesActions.ShowMovies());  
  }

  searchRes(val) {
    this.store.dispatch(new MoviesActions.SearchMovies(val));
  }
}
