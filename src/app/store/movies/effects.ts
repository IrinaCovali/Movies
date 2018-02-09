import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { MoviesService } from './service';
import * as MoviesActions from './actions';

@Injectable()
export class MoviesEffects {
  @Effect()
  moviesShow = this.actions$
    .ofType(MoviesActions.SHOW_MOVIES)
    .switchMap((action: MoviesActions.ShowMovies) => {
      return this.moviesService.retrieveTopRated();
    })
    .map((movies) => {
      return {
        type: MoviesActions.GET_MOVIES,
        payload: movies['results']
      }
    });

  @Effect()
  moviesSearch = this.actions$
    .ofType(MoviesActions.SEARCH_MOVIES)
    .map((action: MoviesActions.SearchMovies) => {
      return action.payload;
    })
    .switchMap((term: string) => {      
      return this.moviesService.searchMovies(term);
    })
    .map((found) => {
      return {
        type: MoviesActions.FOUND_MOVIES,
        payload: found['results']
      }
    });

  constructor(private actions$: Actions, private moviesService: MoviesService) {}
}