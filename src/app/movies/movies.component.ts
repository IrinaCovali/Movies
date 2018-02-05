import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as MoviesActions from '../store/movies.actions';
import * as fromMovies from '../store/movies.reducers';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  search: string;
  moviesState: Observable<fromMovies.State>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.moviesState = this.store.select('moviesReducer');
    this.store.dispatch(new MoviesActions.ShowMovies());   
  }

  searchRes(val) {
    this.search = val;    
    this.store.dispatch(new MoviesActions.SearchMovies(val));
  }
}
