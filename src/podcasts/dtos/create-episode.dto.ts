import { Field, InputType } from '@nestjs/graphql';
import { CreatePodcastDto } from './create-podcast.dto';
import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';
import { PodcastSearchInput } from './podcast.dto';
// export class CreateEpisodeDto {
//   // @IsNumber()
//   // readonly id: number;

//   @IsString()
//   readonly title: string;

//   @IsString()
//   category: string;
// }
@InputType()
export class CreateEpisodeDto extends PodcastSearchInput {
  @Field((type) => String)
  @IsString()
  readonly title: string;

  @Field((type) => String)
  @IsString()
  readonly category: string;
}
