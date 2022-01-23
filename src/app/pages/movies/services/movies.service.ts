import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  public moviesURL: string = "http://localhost:3000/movies";

  constructor(private httpClient: HttpClient) { }

  public getAllMovies() {
    return this.httpClient.get(this.moviesURL)
  }

  public getMovie(idMovie: any) {
    return this.httpClient.get(`${this.moviesURL}/${idMovie}`)
  }
}
