import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../cinema.service'
@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {
  listMovies: Array<any>;
  constructor(public movies: CinemaService ) { }

  ngOnInit() {
    console.log("8========D------3")
    this.listMovies = this.movies.getMovies();
  }

}
