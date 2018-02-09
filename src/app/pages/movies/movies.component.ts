import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';

import * as MoviesActions from '../../store/movies/actions';
import * as fromMovies from '../../store/movies/reducers';
import * as fromStore from '../../store';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html'
})
export class MoviesComponent implements OnInit {
  search: string;
  moviesState: Observable<fromMovies.State>;

  constructor(private store: Store<fromStore.AppState>) {}

  ngOnInit() {
    this.moviesState = this.store.select(fromStore.selectFeature);
    this.store.dispatch(new MoviesActions.ShowMovies());   
  }

  searchRes(val) {
    this.search = val;    
    this.store.dispatch(new MoviesActions.SearchMovies(val));
  }
}