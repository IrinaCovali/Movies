import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './pages/movie/movie.component';
import { SelectedMovieComponent } from './components/selected-movie/selected-movie.component';
import { SearchMoviesComponent } from './components/search-movies/search-movies.component';
import { TopMovieComponent } from './components/top-movie/top-movie.component';
import { FoundMovieComponent } from './components/found-movie/found-movie.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { MoviesService } from './store/movies/service';

import { reducers } from './store';
import { MoviesEffects } from './store/movies/effects';
import { environment } from '../environments/environment';
import { HoverClassDirective } from './directives/hover-class.directive';


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    SelectedMovieComponent,
    TopMovieComponent,
    SearchMoviesComponent,
    FoundMovieComponent,
    MoviesComponent,
    HoverClassDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([MoviesEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
