import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { PodcastsController } from './podcasts/podcasts.controller';
import { PodcastService } from './podcast/podcast.service';
import { PodcastsService } from './podcasts/podcasts.service';

@Module({
  imports: [],
  controllers: [PodcastsController],
  providers: [PodcastsService],
})
export class AppModule {}
