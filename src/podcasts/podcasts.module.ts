import { PodcastsService } from './podcasts.service';

import { Module } from '@nestjs/common';
import { PodCastResolver } from './podcasts.resolver';

@Module({
  providers: [PodcastsService, PodCastResolver],
})
export class PodcastsModule {}
