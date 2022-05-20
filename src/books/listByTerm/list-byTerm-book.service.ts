import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Books } from '../books.schema';
import { Model } from 'mongoose';

@Injectable()
export default class ListByTermBookService {
  constructor(
    @InjectModel(Books.name)
    private bookModel: Model<Books>,
  ) {}

  async findByTerm(title: string): Promise<Books[]> {
    return this.bookModel.find({ title: { $regex: /^input.term/ } }).exec();
  }
}
