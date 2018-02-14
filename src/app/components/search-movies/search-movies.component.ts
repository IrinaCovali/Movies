import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-movies',
  template: '<input type="text" [ngModel]="search" (ngModelChange)="searched($event)" placeholder="Search for movies">'
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