import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as config from '../../config';

@Injectable()
export class MoviesService {
  private API_PATH = config.api.url;
  private API_KEY = config.api.key;

  constructor(private httpClient: HttpClient) {}

  searchMovies(queryTitle: string) {
    return this.httpClient
      .get(`${this.API_PATH}search/movie?${this.API_KEY}&query=${queryTitle}`);
  }

  retrieveTopRated() {
    return this.httpClient
      .get(`${this.API_PATH}movie/top_rated?${this.API_KEY}`);
  }

  getMovie(id: number) {
    return this.httpClient
      .get(`${this.API_PATH}movie/${id}?${this.API_KEY}`);

  }
}
