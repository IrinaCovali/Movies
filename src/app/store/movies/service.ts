import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MoviesService {
  private API_PATH = 'https://api.themoviedb.org/3/';
  private API_KEY = 'api_key=4be3aa587095fff2de95182763daa324';

  constructor(private httpClient: HttpClient) {}

  searchMovies(queryTitle: string) {
    return this.httpClient
      .get(`${this.API_PATH}search/movie?${this.API_KEY}&query=${queryTitle}`);
  }

  retrieveTopRated() {
    return this.httpClient
      .get(`${this.API_PATH}movie/top_rated?${this.API_KEY}`);
  }
}
