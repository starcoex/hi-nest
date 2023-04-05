import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}
  @Get()
  getAll(): Movie[] {
    return this.movieService.getAll();
  }
  @Get('/search')
  search(@Query('year') seachingYear: string) {
    return `This is Search ${seachingYear}`;
  }
  @Get('/:id')
  getOne(@Param('id') id: number) {
    return this.movieService.getOne(id);
  }
  @Post()
  create(@Body() movidData) {
    console.log(movidData);
    return this.movieService.create(movidData);
  }
  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.movieService.deleteOne(id);
  }
  @Patch('/:id')
  patch(@Param('id') id: number, @Body() updateData) {
    return {
      updatedMovie: id,
      ...updateData,
    };
  }
}
