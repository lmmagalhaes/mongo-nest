import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Books } from '../books.schema';
import { Model } from 'mongoose';
import { FindBookInput } from '../inputs/book.input';

@Injectable()
export default class ListOneBookService {
  constructor(
    @InjectModel(Books.name)
    private bookModel: Model<Books>,
  ) {}

  async findOne(book: FindBookInput): Promise<Books> {
    return this.bookModel.findById(book._id);
  }
}
