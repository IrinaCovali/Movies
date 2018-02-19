import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { map } from 'rxjs/operators';

import { Movie } from '../../models/movie';
import * as MoviesActions from '../../store/movies/actions';
import * as fromMovies from '../../store/movies/reducers';
import * as fromStore from '../../store';

@Component({
  selector: 'app-movie-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-selected-movie [movie]="movie | async"></app-selected-movie>
  `,
})
export class MoviePageComponent {
  movieStore: Subscription;
  movie: Observable<{}>;

  constructor(store: Store<fromStore.AppState>, route: ActivatedRoute) {
    this.movieStore = route.params
      .pipe(map(params => new MoviesActions.Select(params.id))).subscribe(store);  
      
      // store.pipe(select(fromStore.getSelectedMovie))

    this.movie = store.pipe(select(fromStore.getSelectedMovieEntity));
  }

  ngOnDestroy() {
    this.movieStore.unsubscribe();
  }

}
