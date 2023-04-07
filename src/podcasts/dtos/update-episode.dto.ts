// export class UpdateEpisodeDto {
//   title?: string;
//   category?: string;
//   rating?: number;
// }

import { Field, InputType } from '@nestjs/graphql';
import { EpisodesSearchInput } from './podcast.dto';
import { IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateEpisodeDto extends EpisodesSearchInput {
  @Field((type) => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly title?: string;

  @Field((type) => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly category?: string;
}
