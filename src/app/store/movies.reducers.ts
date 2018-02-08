import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as MoviesActions from './movies.actions';

export interface State extends EntityState<{}> {
  movies: [{}],
  found: [{}],
  ids: number[],
  selectedMovie: {},
  entities: {}
}

const initialState: State = {
  movies: null,
  found: null,
  ids: [],
  selectedMovie: undefined,
  entities: {}
};

export const adapter: EntityAdapter<{}> = createEntityAdapter<any>({
  selectId: (movie) => movie.id,
  sortComparer: false,
});

export function moviesReducer(state = initialState, action: MoviesActions.MoviesActions) {
  switch (action.type) {
    case MoviesActions.GET_MOVIES:
      return {
        ...state,
        ...adapter.addMany(action.payload, state),
        movies: [...action.payload],
        selectedMovie: state.selectedMovie
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
        selectedMovie: action.payload
      };

    default:
      return state;
  }
}

export const getSelectedId = (state: State) => state.selectedMovie;
