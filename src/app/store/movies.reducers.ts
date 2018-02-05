import * as MoviesActions from './movies.actions';

export interface State {
  movies: [{}],
  found: [{}],
  selectedMovie: {}
}

const initialState: State = {
  movies: null,
  found: null,
  selectedMovie: undefined
};

export function moviesReducer(state = initialState, action: MoviesActions.MoviesActions) {
  switch (action.type) {
    case MoviesActions.GET_MOVIES:
      return {
        ...state,
        movies: [...action.payload]
      };
    case MoviesActions.FOUND_MOVIES:
      return {
        ...state,
        found: [...action.payload]
      };
    case MoviesActions.GET_MOVIE:
      const selectedMovie = state.movies.find(movie => movie['id'] === action.payload) || state.found.find(movie => movie['id'] === action.payload) || state.selectedMovie;
      return {
        ...state,
        found: [],
        selectedMovie
      };
    default:
      return state;
  }
}