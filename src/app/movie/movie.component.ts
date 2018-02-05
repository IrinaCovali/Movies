import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as MoviesActions from '../store/movies.actions';
import * as fromMovies from '../store/movies.reducers';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  id: number;
  movieStore: Observable<fromMovies.State>;

  constructor(private route: ActivatedRoute, private store: Store<any>) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.movieStore = this.store.select('moviesReducer');
    this.store.dispatch(new MoviesActions.GetMovie(this.id));
  }

}
