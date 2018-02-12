import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-movies',
  templateUrl: './search-movies.component.html'
})
export class SearchMoviesComponent {
  @Output() onSearch = new EventEmitter<string>();
  search: string;

  constructor() {}

  searched(val) {
    this.search = val
    this.onSearch.emit(val);
  }

}