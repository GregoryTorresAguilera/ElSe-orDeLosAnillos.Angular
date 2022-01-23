import { MoviesDetailComponent } from './components/movies-detail/movies-detail.component';
import { MoviesComponent } from './movies.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: MoviesComponent },
  {path: ":idMovie", component: MoviesDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
