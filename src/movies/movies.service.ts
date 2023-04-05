import { Movie } from './entities/movie.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];
  getAll(): Movie[] {
    return this.movies;
  }
  getOne(id: number): Movie {
    return this.movies.find((element) => element.id === id);
  }
  deleteOne(id: number): boolean {
    this.movies.filter((element) => element.id !== id);
    return true;
  }
  create(movieData: Movie) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }
}
