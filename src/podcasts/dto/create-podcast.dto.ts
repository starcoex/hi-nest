import { IsArray, IsNumber, IsString } from 'class-validator';
import { CreateEpisodeDto } from './create-episode.dto';
export class CreatePodcastDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly category: string;

  @IsNumber()
  readonly rating: number;

  @IsArray({ each: true })
  readonly episodes: CreateEpisodeDto[];
}
