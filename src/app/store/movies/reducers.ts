import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as MoviesActions from './actions';
import { Movie } from '../../models/movie'

export interface State extends EntityState<Movie> {
  movies: Movie[],
  found: Movie[],
  ids: number[],
  selectedMovieId: string,
  entities: {}
}

const initialState: State = {
  movies: null,
  found: null,
  ids: [],
  selectedMovieId: undefined,
  entities: {}
};

export const adapter: EntityAdapter<Movie> = createEntityAdapter<Movie>({
  selectId: (movie: Movie) => movie.id,
  sortComparer: false,
});

export function moviesReducer(state = initialState, action: MoviesActions.MoviesActions) {
  switch (action.type) {
    case MoviesActions.GET_MOVIES:
      return {
        ...state,
        ...adapter.addMany(action.payload, state),
        movies: [...action.payload],
        selectedMovieId: state.selectedMovieId
      };

    case MoviesActions.FOUND_MOVIES:
      return {
        ...state,
        ...adapter.addMany(action.payload, state),
        found: [...action.payload]
      };

    case MoviesActions.SELECT:
      return {
        ...state,
        found: null,
        selectedMovieId: action.payload
      };

    default:
      return state;
  }
}

export const getSelectedId = (state: State) => state.selectedMovieId;
