import { Episode } from '../entities/episode.entity';
import { CreatePodcastDto } from './create-podcast.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePodcastDto {
  readonly title?: string;
  readonly category?: string;
  readonly rating?: number;
  readonly episodes?: Episode[];
}
