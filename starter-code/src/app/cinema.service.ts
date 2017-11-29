import { Injectable } from '@angular/core';
import movieList from '../sample-movies';
interface Movies {
  id: number,
  title: string,
  poster: string,
  synopsis: string,
  genres: Array<string>,
  year: number,
  director: string,
  actors: Array<string>,
  hours: Array<string>,
  room: number
};

@Injectable()
export class CinemaService {
  movieList: Array<Movies> = movieList;
  constructor() { }

getMovies(){
  return this.movieList;
}

getMovie(id){
  return this.movieList.filter(e => e.id == id)[0];
}
}
