import { Field, InputType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class BookInput {
  @Field()
  readonly title: string;

  @Field()
  readonly author: string;
}

@InputType()
export class UpdateBookInput {
  @Field()
  readonly _id: string;

  @Field()
  readonly title: string;

  @Field()
  readonly author: string;
}

@InputType()
export class SoftDeleteBookInput {
  @Field()
  readonly _id: string;

  @IsOptional()
  @Field({ nullable: true })
  readonly deletedAt?: Date;
}

@InputType()
export class FindBookInput {
  @Field()
  readonly _id: string;
}

@InputType()
export class FindBookByTermInput {
  @Field()
  @IsOptional()
  readonly term?: string | undefined | null;
}
