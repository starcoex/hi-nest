import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';
import { CoreOutput } from './output.dto';
import { PodCast } from '../entities/podcast.entity';
import { Episode } from '../entities/episode.entity';

@InputType()
export class PodcastSearchInput {
  @Field((type) => Number)
  @IsNumber()
  id: number;
}
@ObjectType()
export class PodcastOutput extends CoreOutput {
  @Field((type) => PodCast, { nullable: true })
  podcast?: PodCast;
}
@ObjectType()
export class EpisodesOutput extends CoreOutput {
  @Field((type) => [PodCast], { nullable: true })
  episodes?: Episode[];
}

@InputType()
export class EpisodesSearchInput {
  @Field((type) => Number)
  @IsNumber()
  podcastId: number;

  @Field((type) => Number)
  @IsNumber()
  episodeId: number;
}
