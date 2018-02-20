import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as config from '../../config';
import { Movie } from '../../models/movie';

@Injectable()
export class MoviesService {
  private API_PATH = config.api.url;
  private API_KEY = config.api.key;

  constructor(private httpClient: HttpClient) {}

  searchMovies(queryTitle: string) {
    return this.httpClient
      .get(`${this.API_PATH}search/movie?${this.API_KEY}&query=${queryTitle}`)
      .map(data => data['results'].map(movie => new Movie(movie)));
  }

  retrieveTopRated() {
    return this.httpClient
      .get(`${this.API_PATH}movie/top_rated?${this.API_KEY}`)
      .map(data => data['results'].map(movie => new Movie(movie)));
  }

  getMovie(id: number) {
    return this.httpClient
      .get(`${this.API_PATH}movie/${id}?${this.API_KEY}`)
      .map(movie => new Movie(movie));

  }
}
