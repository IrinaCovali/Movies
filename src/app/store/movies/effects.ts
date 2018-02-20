import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { empty } from 'rxjs/observable/empty';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { Movie } from '../../models/movie';
import { MoviesService } from './service';
import * as MoviesActions from './actions';
import { getSelectedMovie } from '../index';

@Injectable()
export class MoviesEffects {
  @Effect()
  moviesShow = this.actions$
    .ofType(MoviesActions.SHOW_MOVIES)
    .switchMap((action: MoviesActions.ShowMovies) => {
      return this.moviesService.retrieveTopRated();
    })
    .map(movies => {
      return new MoviesActions.GetMovies(movies)
    });

  @Effect()
  moviesSearch = this.actions$
    .ofType(MoviesActions.SEARCH_MOVIES)
    .debounceTime(500)
    .map((action: MoviesActions.SearchMovies) => {
      return action.payload;
    })
    .switchMap((term: string) => {    
      if (term === '') {
        return empty();
      }  
      return this.moviesService.searchMovies(term);
    })
    .map(found => new MoviesActions.FoundMovies(found));

  @Effect()
  movieSearch = this.actions$
    .ofType(MoviesActions.SELECT)
    .switchMap((action: MoviesActions.Select) => {
      return this.moviesService.getMovie(+action.payload);
    })
    .map(movie => new MoviesActions.SelectedMovie(movie));

  constructor(private actions$: Actions, private moviesService: MoviesService) {}
}