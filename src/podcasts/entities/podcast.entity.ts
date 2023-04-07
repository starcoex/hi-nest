import { Field, ObjectType } from '@nestjs/graphql';
import { Episode } from './episode.entity';
import { IsNumber, IsString } from 'class-validator';

// export class PodCast {
//   id: number;
//   title: string;
//   category: string;
//   rating: number;
//   episodes: Episode[];
// }

@ObjectType()
export class PodCast {
  @Field((type) => Number)
  @IsNumber()
  id: number;

  @Field((type) => String)
  @IsString()
  title: string;

  @Field((type) => String)
  @IsString()
  category: string;

  @Field((type) => Number)
  @IsNumber()
  rating: number;

  @Field((type) => [Episode])
  @IsString()
  episodes: Episode[];
}
