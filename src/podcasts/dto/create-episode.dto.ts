import { IsString } from 'class-validator';
export class CreateEpisodeDto {
  @IsString()
  readonly title: string;

  @IsString()
  description: string;
}
