import { createSelector } from '@ngrx/store';

import * as fromFeature from './movies/reducers';


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

export const getSelectedMovieEntity = createSelector(
  selectFeature,
  fromFeature.getSelectedMovie
);

export const getMovieEntitiesState = createSelector(
  selectFeature,
  state => state
);

export const {
  selectIds: getMovieIds,
  selectEntities: getMovieEntities,
} = fromFeature.adapter.getSelectors(getMovieEntitiesState);

export const getSelectedMovie = createSelector(
  getMovieEntities,
  getSelectedMovieId,
  (entities, selectedId) => {
    return entities[selectedId];
  }
);