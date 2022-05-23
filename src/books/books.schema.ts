import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Books extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  author: string;

  @Prop()
  term: string;

  @Prop()
  deletedAt: Date;
}

export const BooksSchema = SchemaFactory.createForClass(Books);
