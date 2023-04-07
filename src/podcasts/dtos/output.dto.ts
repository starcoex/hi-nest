import { Field, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsOctal, IsOptional, IsString } from 'class-validator';

@ObjectType()
export class CoreOutput {
  @Field((type) => String, { nullable: true })
  @IsString()
  @IsOptional()
  error?: string;

  @Field((type) => Number)
  @IsBoolean()
  ok: boolean;
}
