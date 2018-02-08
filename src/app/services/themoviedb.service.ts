import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class TheMovieDBService {
  private API_PATH = 'https://api.themoviedb.org/3/';
  private API_KEY = 'api_key=4be3aa587095fff2de95182763daa324';

  constructor(private http: HttpClient) {}

  searchMovies(queryTitle: string) {
    return this.http
      .get(`${this.API_PATH}search/movie?${this.API_KEY}&query=${queryTitle}`);
  }

  retrieveTopRated() {
    return this.http
      .get(`${this.API_PATH}movie/top_rated?${this.API_KEY}`);
  }
}
