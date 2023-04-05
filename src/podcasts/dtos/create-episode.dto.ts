import { CreatePodcastDto } from './create-podcast.dto';
import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';
// export class CreateEpisodeDto {
//   // @IsNumber()
//   // readonly id: number;

//   @IsString()
//   readonly title: string;

//   @IsString()
//   category: string;
// }
export class CreateEpisodeDto extends CreatePodcastDto {}
