import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../cinema.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {

  constructor(private route: ActivatedRoute, public listMovies: CinemaService) { }
  movie;
  ngOnInit() {
    this.route.params
      .subscribe((params) => this.movie = this.listMovies.getMovie(params['id']));
  }

}
