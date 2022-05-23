import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Books } from '../books.schema';
import { Model } from 'mongoose';
import { FindBookByTermInput } from '../inputs/book.input';

@Injectable()
export default class ListByTermBookService {
  constructor(
    @InjectModel(Books.name)
    private bookModel: Model<Books>,
  ) {}

  async findByTerm(input: FindBookByTermInput): Promise<Books[]> {
    return this.bookModel.find({ title: { $regex: input.term } }).exec();
  }
}
