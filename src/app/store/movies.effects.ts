import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

import * as MoviesActions from './movies.actions';
import * as ApiConfig from '../api-config/index';

@Injectable()
export class MoviesEffects {
  @Effect()
  moviesShow = this.actions$
    .ofType(MoviesActions.SHOW_MOVIES)
    .switchMap((action: MoviesActions.ShowMovies) => {
      return this.http.get(ApiConfig.url + ApiConfig.url_params.Top + ApiConfig.api_key)
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
      return this.http.get(ApiConfig.url + ApiConfig.url_params.Search + ApiConfig.api_key + `&query=${term}`)
    })
    .map((found) => {
      return {
        type: MoviesActions.FOUND_MOVIES,
        payload: found['results']
      }
    });

  constructor(private actions$: Actions, private http: HttpClient) {}
}