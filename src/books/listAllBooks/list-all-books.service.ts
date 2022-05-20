import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Books } from '../books.schema';
import { Model } from 'mongoose';

@Injectable()
export default class ListBooksService {
  constructor(
    @InjectModel(Books.name)
    private bookModel: Model<Books>,
  ) {}

  async findAll(): Promise<Books[]> {
    return this.bookModel.find().exec();
  }
}
