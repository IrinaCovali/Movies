import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { map } from 'rxjs/operators';

import * as MoviesActions from '../store/movies.actions';
import * as fromMovies from '../store/movies.reducers';
import * as fromStore from '../store/reducers';

@Component({
  selector: 'app-movie-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-selected-movie-page></app-selected-movie-page>
  `,
})
export class MovieComponent {
  movieStore: Subscription;

  constructor(store: Store<fromStore.AppState>, route: ActivatedRoute) {
    this.movieStore = route.params
      .pipe(map(params => new MoviesActions.Select(params.id))).subscribe(store);   
  }

  ngOnDestroy() {
    this.movieStore.unsubscribe();
  }

}
