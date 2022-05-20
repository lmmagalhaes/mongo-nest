import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Books } from '../books.schema';
import { Model } from 'mongoose';
import { UpdateBookInput } from '../inputs/book.input';

@Injectable()
export default class UpdateBookService {
  constructor(
    @InjectModel(Books.name)
    private bookModel: Model<Books>,
  ) {}

  async update(updateBook: UpdateBookInput): Promise<Books> {
    const { _id } = updateBook;
    const book = await this.bookModel.findByIdAndUpdate({ _id }, updateBook, {
      new: true,
    });
    return book.save();
  }
}
