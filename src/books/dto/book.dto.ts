import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BookDto {
  @Field()
  readonly _id: string;

  @Field()
  readonly title: string;

  @Field()
  readonly author: string;

  @Field()
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt: Date;

  @Field({ nullable: true })
  deletedAt: Date;
}
