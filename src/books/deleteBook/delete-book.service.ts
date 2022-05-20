import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Books } from '../books.schema';
import { Model, Types } from 'mongoose';

@Injectable()
export default class DeleteBooksService {
  constructor(
    @InjectModel(Books.name)
    private bookModel: Model<Books>,
  ) {}

  async deleteBook(_id: string): Promise<any> {
    await this.bookModel.deleteOne({ _id: new Types.ObjectId(_id) });
    return 'Usuário deletado';
  }
}
