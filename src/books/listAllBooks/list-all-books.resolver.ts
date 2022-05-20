import { Query, Resolver } from '@nestjs/graphql';
import { BookDto } from '../dto/book.dto';
import ListBooksService from './list-all-books.service';

@Resolver()
export class ListBooksResolver {
  constructor(private booksService: ListBooksService) {}

  // Eu, como usuário, desejo listar todos os livros cadastrados;
  @Query(() => [BookDto])
  async books() {
    return this.booksService.findAll();
  }
}
