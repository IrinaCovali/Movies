import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviePageComponent } from './pages/movie/movie-page.component';
import { MoviesPageComponent } from './pages/movies/movies-page.component';

const appRoutes: Routes = [
  { path: 'movies', component: MoviesPageComponent },
  { path: 'movie/:id', component: MoviePageComponent },
  { path: '', redirectTo: 'movies', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
