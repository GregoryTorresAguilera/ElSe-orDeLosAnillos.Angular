import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { MovieInterface } from '../../models/Movie';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.scss']
})
export class MoviesDetailComponent implements OnInit {
public movie!: MovieInterface;
  constructor(private activatedRoute: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const idMovie = params.get('idMovie');

      this.moviesService.getMovie(idMovie).subscribe((data: any) => {
        const apiResult: MovieInterface = data;
        this.movie = apiResult
      })
    })
  }

}
