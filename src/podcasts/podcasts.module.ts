import { PodcastsService } from './podcasts.service';
import { PodcastsController, EpisodeController } from './podcasts.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [PodcastsController, EpisodeController],
  providers: [PodcastsService],
})
export class PodcastsModule {}
