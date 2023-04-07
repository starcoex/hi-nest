import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Episode } from '../entities/episode.entity';
import { CreatePodcastDto } from './create-podcast.dto';
import { PartialType } from '@nestjs/mapped-types';
import { PodcastSearchInput } from './podcast.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';

// export class UpdatePodcastDto {
//   readonly title?: string;
//   readonly category?: string;
//   readonly rating?: number;
//   readonly episodes?: Episode[];
// }
@InputType({ isAbstract: true })
@ObjectType()
export class UpdatePodcastDto extends PodcastSearchInput {
  @Field((type) => String, { nullable: true })
  @IsString()
  @IsOptional()
  title?: string;

  @Field((type) => String, { nullable: true })
  @IsString()
  @IsOptional()
  category?: string;

  @Field((type) => Number, { nullable: true })
  @IsNumber()
  @IsOptional()
  rating?: number;

  @Field((type) => [Episode], { nullable: true })
  episodes?: Episode[];
}
