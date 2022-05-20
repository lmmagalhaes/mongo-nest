import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Books } from '../books.schema';
import { Model, Types } from 'mongoose';
import { SoftDeleteBookInput } from '../inputs/book.input';

@Injectable()
export default class SoftDeleteBooksService {
  constructor(
    @InjectModel(Books.name)
    private bookModel: Model<Books>,
  ) {}

  async softDelete(softDelete: SoftDeleteBookInput) {
    const { _id } = softDelete;
    const bookDeleted = await this.bookModel.findByIdAndUpdate(
      { _id },
      softDelete,
      { new: true },
    );
    bookDeleted.deletedAt = new Date();
    return bookDeleted.save();
  }
}
