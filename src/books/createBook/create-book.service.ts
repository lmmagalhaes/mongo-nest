import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Books } from '../books.schema';
import { Model } from 'mongoose';
import { BookInput } from '../inputs/book.input';

@Injectable()
export default class CreateBooksService {
  constructor(
    @InjectModel(Books.name)
    private bookModel: Model<Books>,
  ) {}

  async create(createBook: BookInput): Promise<Books> {
    const book = new this.bookModel(createBook);
    return book.save();
  }
}
