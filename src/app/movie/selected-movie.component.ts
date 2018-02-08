import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromStore from '../store/reducers';

@Component({
  selector: 'app-selected-movie-page',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class SelectedMovieComponent {
  movie: Observable<{}>;
  private moviePath = 'https://image.tmdb.org/t/p/w300';

  constructor(store: Store<fromStore.AppState>) {
    this.movie = store.pipe(select(fromStore.getSelectedBook))
  }

}
