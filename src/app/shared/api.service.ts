import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import * as config from '../config';


@Injectable()
export class ApiService {
  private API_URL = config.api.url;
  private API_KEY = config.api.key;

  constructor(private httpClient: HttpClient) {}

  get(url?, param?) {
    let params = new HttpParams().append('api_key', this.API_KEY);

    if(param) {
      Object.keys(param).forEach(key => params = params.append(key, param[key]));
    }

    return this.httpClient.get(`${this.API_URL}${url}`, { params }) 
  } 
  
}