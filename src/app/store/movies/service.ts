import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ApiService } from '../../shared/api.service';
import { Movie } from '../../models/movie';

@Injectable()
export class MoviesService {

  constructor(private apiService: ApiService) {}

  searchMovies(query: string) {
    return this.apiService
      .get('search/movie', { query })
      .map(data => data['results'].map(movie => new Movie(movie)));
  }

  retrieveTopRated() {
    return this.apiService
      .get('movie/top_rated')
      .map(data => data['results'].map(movie => new Movie(movie)));
  }

  getMovie(id: number) {
    return this.apiService
      .get(`movie/${id}`)
      .map(movie => new Movie(movie));
  }
}
