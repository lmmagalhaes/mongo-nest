import { Args, Query, Resolver } from '@nestjs/graphql';
import { BookDto } from '../dto/book.dto';
import ListByTermBookService from './list-byTerm-book.service';

@Resolver()
export class ListByTermBookResolver {
  constructor(private booksService: ListByTermBookService) {}

  // Eu, como usuário, desejo listar os livros cadastrados filtrando por uma palavra chave;
  @Query(() => [BookDto])
  async findByTerm() {
    return this.booksService.findByTerm();
  }
}
