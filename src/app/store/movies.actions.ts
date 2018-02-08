import { Action } from '@ngrx/store';

export const SHOW_MOVIES = 'SHOW_MOVIES';
export const GET_MOVIES = 'GET_MOVIES';
export const SEARCH_MOVIES = 'SEARCH_MOVIES';
export const FOUND_MOVIES = 'FOUND_MOVIES';
export const GET_MOVIE = 'GET_MOVIE';
export const SELECT = 'SELECT';

export class ShowMovies implements Action {
  readonly type = SHOW_MOVIES;
}

export class GetMovies implements Action {
  readonly type = GET_MOVIES;
  constructor(public payload: [{}]) {}
}

export class SearchMovies implements Action {
  readonly type = SEARCH_MOVIES;
  constructor(public payload: string) {}
}

export class FoundMovies implements Action {
  readonly type = FOUND_MOVIES;
  constructor(public payload: [{}]) {}
}

export class GetMovie implements Action {
  readonly type = GET_MOVIE;
  constructor(public payload: number) {}
}

export class Select implements Action {
  readonly type = SELECT;

  constructor(public payload: string) {}
}

export type MoviesActions = ShowMovies | GetMovies | SearchMovies | FoundMovies | GetMovie | Select;