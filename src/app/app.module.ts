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
import { MovieComponent } from './movie/movie.component';
import { SelectedMovieComponent } from './movie/selected-movie.component';
import { MoviesComponent } from './movies/movies.component';
import { TheMovieDBService } from './services/themoviedb.service';

import { reducers } from './store/reducers';
import { MoviesEffects } from './store/movies.effects';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    SelectedMovieComponent,
    MoviesComponent
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
  providers: [TheMovieDBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
