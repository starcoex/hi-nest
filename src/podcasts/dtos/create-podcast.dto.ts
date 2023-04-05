import { IsArray, IsNumber, IsString } from 'class-validator';
import { CreateEpisodeDto } from './create-episode.dto';
export class CreatePodcastDto {
  // @IsNumber()
  // readonly id: number;

  @IsString()
  readonly title: string;

  @IsString()
  readonly category: string;

  // @IsNumber()
  // readonly rating: number;

  // @IsString({ each: true })
  // readonly episodes: CreateEpisodeDto[];
}
