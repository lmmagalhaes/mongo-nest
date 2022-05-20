import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Books, BooksSchema } from './books.schema';
import { CreateBooksResolver } from './createBook/create-book.resolver';
import CreateBooksService from './createBook/create-book.service';
import { DeleteBooksResolver } from './deleteBook/delete-book.resolver';
import DeleteBooksService from './deleteBook/delete-book.service';
import { ListBooksResolver } from './listAllBooks/list-all-books.resolver';
import ListBooksService from './listAllBooks/list-all-books.service';
import { ListByTermBookResolver } from './listByTerm/list-byTerm-book.resolver';
import ListByTermBookService from './listByTerm/list-byTerm-book.service';
import { ListOneBookResolver } from './listOneBook/list-one-books.resolver';
import ListOneBookService from './listOneBook/list-one-books.service';
import { SoftDeleteBooksResolver } from './softDeleteBook/soft-delete-book.resolver';
import SoftDeleteBooksService from './softDeleteBook/soft-delete-book.service';
import { UpdateBookResolver } from './updateBook/update-book.resolver';
import UpdateBookService from './updateBook/update-book.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Books.name, schema: BooksSchema }]),
  ],
  providers: [
    CreateBooksResolver,
    CreateBooksService,
    DeleteBooksResolver,
    DeleteBooksService,
    ListBooksResolver,
    ListBooksService,
    ListOneBookResolver,
    ListOneBookService,
    ListByTermBookResolver,
    ListByTermBookService,
    SoftDeleteBooksResolver,
    SoftDeleteBooksService,
    UpdateBookResolver,
    UpdateBookService,
  ],
})
export class BooksModule {}
