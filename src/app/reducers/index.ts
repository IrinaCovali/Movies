import { createSelector } from '@ngrx/store';

import * as fromFeature from '../store/movies.reducers';


export interface AppState {
  collection: fromFeature.State
}

export const reducers = {
  collection: fromFeature.moviesReducer
};

export const selectFeature = (state: AppState) => state.collection;


export const getSelectedMovieId = createSelector(
  selectFeature,
  fromFeature.getSelectedId
);

export const getMovieEntitiesState = createSelector(
  selectFeature,
  state => state
);

export const {
  selectIds: getMovieIds,
  selectEntities: getMovieEntities,
} = fromFeature.adapter.getSelectors(getMovieEntitiesState);

export const getSelectedBook = createSelector(
  getMovieEntities,
  getSelectedMovieId,
  (entities, selectedId) => {
    return entities[selectedId];
  }
);