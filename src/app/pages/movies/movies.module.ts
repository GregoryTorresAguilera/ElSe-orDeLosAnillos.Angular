import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { MoviesDetailComponent } from './components/movies-detail/movies-detail.component';


@NgModule({
  declarations: [
    MoviesComponent,
    MoviesDetailComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    HttpClientModule
  ]
})
export class MoviesModule { }
