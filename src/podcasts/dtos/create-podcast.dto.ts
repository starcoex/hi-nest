import { IsArray, IsNumber, IsString } from 'class-validator';
import { CreateEpisodeDto } from './create-episode.dto';
import { Field, InputType } from '@nestjs/graphql';
// export class CreatePodcastDto {
//   @IsString()
//   readonly title: string;

//   @IsString()
//   readonly category: string;
// }
@InputType()
export class CreatePodcastDto {
  @Field((type) => String)
  @IsString()
  readonly title: string;

  @Field((type) => String)
  @IsString()
  readonly category: string;
}
